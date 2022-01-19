package utils

import (
	"crypto/sha1"
	"errors"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

const (
	salt      = "sajdaoi3232i1oji"
	signInKey = "qrkjk#4#%35FSFJlja#4353KSFjH"
	tokenTTL  = 12 * time.Hour
)

type tokenClaims struct {
	jwt.StandardClaims
	UserId uint `json:"user_id"`
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

func HashPassword(password string) string {
	hash := sha1.New()
	hash.Write([]byte(password))

	return fmt.Sprintf("%x", hash.Sum([]byte(salt)))
}

func GenerateToken(id uint) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &tokenClaims{
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(tokenTTL).Unix(),
			IssuedAt:  time.Now().Unix(),
		},
		id,
	})
	return token.SignedString([]byte(signInKey))
}

func ParseToken(accessToken string) (uint, error) {
	token, err := jwt.ParseWithClaims(accessToken, &tokenClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("invalid signing method")
		}

		return []byte(signInKey), nil
	})
	if err != nil {
		return 0, err
	}

	claims, ok := token.Claims.(*tokenClaims)
	if !ok {
		return 0, errors.New("token claims are not of type *tokenClaims")
	}

	return claims.UserId, nil
}
