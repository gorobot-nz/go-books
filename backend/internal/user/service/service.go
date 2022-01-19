package service

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/gorobot-nz/go-books/internal/utils"
)

type UserService struct {
	repository domain.UserRepository
}

func NewUserService(repository domain.UserRepository) *UserService {
	return &UserService{repository: repository}
}

func (s *UserService) SignUp(ctx context.Context, user *domain.User) (uint, error) {
	user.Password = utils.HashPassword(user.Password)
	return s.repository.SignUp(ctx, user)
}

func (s *UserService) SignIn(ctx context.Context, username, password string) (string, error) {
	user, err := s.repository.SignIn(ctx, username, utils.HashPassword(password))
	if err != nil {
		return "", err
	}

	return utils.GenerateToken(user.Id)
}
