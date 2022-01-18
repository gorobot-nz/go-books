package service

import (
	"context"
	"crypto/sha1"
	"fmt"
	"github.com/gorobot-nz/go-books/internal/domain"
)

const (
	salt = "sajdaoi3232i1oji"
)

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

func (s *UserService) SignIn(ctx context.Context, username, password string) (*domain.User, error) {
	password = hashPassword(password)
	return s.repository.SignIn(ctx, username, password)
}

func hashPassword(password string) string {
	hash := sha1.New()
	hash.Write([]byte(password))

	return fmt.Sprintf("%x", hash.Sum([]byte(salt)))
}
