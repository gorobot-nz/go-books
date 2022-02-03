package service

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/stretchr/testify/mock"
)

type BookServiceMock struct {
	mock.Mock
}

func (b *BookServiceMock) GetBooks(ctx context.Context) (*[]domain.Book, error) {
	args := b.Called()

	return args.Get(0).(*[]domain.Book), args.Error(1)
}

func (b *BookServiceMock) GetBookById(ctx context.Context, id string) (*domain.Book, error) {
	args := b.Called(id)

	return args.Get(0).(*domain.Book), args.Error(1)
}

func (b *BookServiceMock) GetBooksByAuthorId(ctx context.Context, id int) (*[]domain.Book, error) {
	//TODO implement me
	panic("implement me")
}

func (b *BookServiceMock) AddBook(ctx context.Context, book *domain.Book) (string, error) {
	args := b.Called(book)

	return args.Get(0).(string), args.Error(1)
}

func (b *BookServiceMock) UpdateBook(ctx context.Context, id string, book *domain.Book) (string, error) {
	args := b.Called(id, book)

	return args.Get(0).(string), args.Error(1)
}

func (b *BookServiceMock) DeleteBook(ctx context.Context, id string) (string, error) {
	args := b.Called(id)

	return args.Get(0).(string), args.Error(1)
}
