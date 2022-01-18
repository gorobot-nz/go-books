package service

import "github.com/gorobot-nz/go-books/internal/domain"

type AuthorService struct {
	repository domain.AuthorRepository
}

func NewAuthorService(repository domain.AuthorRepository) *AuthorService {
	return &AuthorService{repository: repository}
}

func (a *AuthorService) AddAuthor() {
	//TODO implement me
	panic("implement me")
}

func (a *AuthorService) GetAuthors() {
	//TODO implement me
	panic("implement me")
}

func (a *AuthorService) GetAuthorById() {
	//TODO implement me
	panic("implement me")
}

func (a *AuthorService) DeleteAuthor() {
	//TODO implement me
	panic("implement me")
}

func (a *AuthorService) UpdateAuthor() {
	//TODO implement me
	panic("implement me")
}
