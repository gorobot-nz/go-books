package service

import (
	"context"
	"crypto/sha1"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gorobot-nz/go-books/internal/domain"
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

type UserService struct {
	repository domain.UserRepository
}

func NewUserService(repository domain.UserRepository) *UserService {
	return &UserService{repository: repository}
}

func (s *UserService) SignUp(ctx context.Context, user *domain.User) (int, error) {
	user.Password = hashPassword(user.Password)
	return s.repository.SignUp(ctx, user)
}

func (s *UserService) SignIn(ctx context.Context, username, password string) (string, error) {
	user, err := s.repository.SignIn(ctx, username, hashPassword(password))
	if err != nil {
		return "", err
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &tokenClaims{
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(tokenTTL).Unix(),
			IssuedAt:  time.Now().Unix(),
		},
		user.Id,
	})

	return token.SignedString([]byte(signInKey))
}

func hashPassword(password string) string {
	hash := sha1.New()
	hash.Write([]byte(password))

	return fmt.Sprintf("%x", hash.Sum([]byte(salt)))
}

func generateToken() (string, error) {
	return "", nil
}
