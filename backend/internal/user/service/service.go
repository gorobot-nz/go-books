package service

import "github.com/gorobot-nz/go-books/internal/domain"

type UserService struct {
	repository domain.UserRepository
}

func NewUserService(repository domain.UserRepository) *UserService {
	return &UserService{repository: repository}
}

func (u *UserService) SignUp() {
	//TODO implement me
	panic("implement me")
}

func (u *UserService) SignIn() {
	//TODO implement me
	panic("implement me")
}
