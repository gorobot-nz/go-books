package service

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/stretchr/testify/mock"
)

type UserServiceMock struct {
	mock.Mock
}

func (s *UserServiceMock) SignUp(ctx context.Context, user *domain.User) (uint, error) {
	args := s.Called(user)

	return args.Get(0).(uint), args.Error(1)
}

func (s *UserServiceMock) SignIn(ctx context.Context, username, password string) (string, error) {
	args := s.Called(username, password)

	return args.Get(0).(string), args.Error(1)
}
