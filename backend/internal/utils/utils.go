package utils

import (
	"crypto/sha1"
	"errors"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
	"net/http"
	"time"
)

const (
	salt          = "sajdaoi3232i1oji"
	signInKey     = "qrkjk#4#%35FSFJlja#4353KSFjH"
	tokenTTL      = 12 * time.Hour
	userIdCtx     = "userId"
	userRoleIdCtx = "userRoleId"
)

type tokenClaims struct {
	jwt.StandardClaims
	UserId      uint   `json:"user_id"`
	UserRoleId  uint   `json:"user_role_id"`
	UserName    string `json:"user_name"`
	UserSurname string `json:"user_surname"`
}

func ErrorMessage(c *gin.Context, message string) {
	c.JSON(http.StatusBadRequest, gin.H{
		"error": message,
	})
}

func AuthErrorMessage(c *gin.Context, message string) {
	c.JSON(http.StatusUnauthorized, gin.H{
		"error": message,
	})
}

func GetUserIdAndRole(c *gin.Context) (uint, uint, bool) {
	userId, ok := getCtxVar(c, userIdCtx)
	if !ok {
		return 0, 0, ok
	}

	userRoleId, ok := getCtxVar(c, userRoleIdCtx)
	if !ok {
		return 0, 0, ok
	}
	return userId, userRoleId, ok
}

func getCtxVar(c *gin.Context, name string) (uint, bool) {
	value, ok := c.Get(name)
	if !ok {
		return 0, false
	}

	valueUint, ok := value.(uint)
	if !ok {
		return 0, false
	}
	return valueUint, true
}

func HashPassword(password string) string {
	hash := sha1.New()
	hash.Write([]byte(password))

	return fmt.Sprintf("%x", hash.Sum([]byte(salt)))
}

func GenerateToken(user *domain.User) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &tokenClaims{
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(tokenTTL).Unix(),
			IssuedAt:  time.Now().Unix(),
		},
		user.Id,
		user.RoleId,
		user.Name,
		user.Surname,
	})
	return token.SignedString([]byte(signInKey))
}

func ParseToken(accessToken string) (uint, uint, error) {
	token, err := jwt.ParseWithClaims(accessToken, &tokenClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("invalid signing method")
		}

		return []byte(signInKey), nil
	})
	if err != nil {
		return 0, 0, err
	}

	claims, ok := token.Claims.(*tokenClaims)
	if !ok {
		return 0, 0, errors.New("token claims are not of type *tokenClaims")
	}

	return claims.UserId, claims.UserRoleId, nil
}
