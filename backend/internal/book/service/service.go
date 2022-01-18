package service

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
)

type BookService struct {
	repository domain.BookRepository
}

func NewBookService(repository domain.BookRepository) *BookService {
	return &BookService{repository: repository}
}

func (b *BookService) GetBooks(ctx context.Context) (*[]domain.Book, error) {
	return b.repository.GetBooks(ctx)

}

func (b *BookService) GetBookById(ctx context.Context, id string) (*domain.Book, error) {
	return b.repository.GetBookById(ctx, id)
}

func (b *BookService) GetBooksByAuthorId(ctx context.Context, id int) (*[]domain.Book, error) {
	//TODO implement me
	panic("implement me")
}

func (b *BookService) AddBook(ctx context.Context, book *domain.Book) (string, error) {
	return b.repository.AddBook(ctx, book)
}

func (b *BookService) UpdateBook(ctx context.Context, id string, book *domain.Book) (string, error) {
	return b.repository.UpdateBook(ctx, id, book)
}

func (b *BookService) DeleteBook(ctx context.Context, id string) (string, error) {
	//TODO implement me
	panic("implement me")
}
