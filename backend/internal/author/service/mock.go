package service

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/stretchr/testify/mock"
)

type AuthorServiceMock struct {
	mock.Mock
}

func (a *AuthorServiceMock) AddAuthor(ctx context.Context, author *domain.Author) (string, error) {
	args := a.Called(author)

	return args.Get(0).(string), args.Error(1)
}

func (a *AuthorServiceMock) GetAuthors(ctx context.Context) (*[]domain.Author, error) {
	args := a.Called()

	return args.Get(0).(*[]domain.Author), args.Error(1)
}

func (a *AuthorServiceMock) GetAuthorById(ctx context.Context, id string) (*domain.Author, error) {
	args := a.Called(id)

	return args.Get(0).(*domain.Author), args.Error(1)
}

func (a *AuthorServiceMock) DeleteAuthor(ctx context.Context, id string) (string, error) {
	args := a.Called(id)

	return args.Get(0).(string), args.Error(1)
}

func (a *AuthorServiceMock) UpdateAuthor(ctx context.Context, id string, author *domain.Author) (string, error) {
	args := a.Called(id, author)

	return args.Get(0).(string), args.Error(1)
}
