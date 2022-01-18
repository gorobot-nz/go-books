package service

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
)

type UserService struct {
	repository domain.UserRepository
}

func NewUserService(repository domain.UserRepository) *UserService {
	return &UserService{repository: repository}
}

func (u *UserService) SignUp(ctx context.Context, user *domain.User) (int, error) {
	return 0, nil
}

func (u *UserService) SignIn(ctx context.Context, username, password string) (*domain.User, error) {
	return nil, nil
}
