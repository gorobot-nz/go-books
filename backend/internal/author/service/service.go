package service

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
)

type AuthorService struct {
	repository domain.AuthorRepository
}

func NewAuthorService(repository domain.AuthorRepository) *AuthorService {
	return &AuthorService{repository: repository}
}

func (a AuthorService) AddAuthor(ctx context.Context, author *domain.Author) (int, error) {
	//TODO implement me
	panic("implement me")
}

func (a AuthorService) GetAuthors(ctx context.Context) (*[]domain.Author, error) {
	//TODO implement me
	panic("implement me")
}

func (a AuthorService) GetAuthorById(ctx context.Context, id int) (*domain.Author, error) {
	//TODO implement me
	panic("implement me")
}

func (a AuthorService) DeleteAuthor(ctx context.Context, id int) (int, error) {
	//TODO implement me
	panic("implement me")
}

func (a AuthorService) UpdateAuthor(ctx context.Context, id int, author *domain.Author) (int error) {
	//TODO implement me
	panic("implement me")
}
