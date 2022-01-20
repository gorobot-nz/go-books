package service

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
)

type BookService struct {
	bookRepository   domain.BookRepository
	authorRepository domain.AuthorRepository
}

func NewBookService(bookRepository domain.BookRepository, authorRepository domain.AuthorRepository) *BookService {
	return &BookService{bookRepository: bookRepository, authorRepository: authorRepository}
}

func (b *BookService) GetBooks(ctx context.Context) (*[]domain.Book, error) {
	panic("")
}

func (b *BookService) GetBookById(ctx context.Context, id string) (*domain.Book, error) {
	panic("")
}

func (b *BookService) GetBooksByAuthor(ctx context.Context, id int) (*[]domain.Book, error) {
	//TODO implement me
	panic("implement me")
}

func (b *BookService) AddBook(ctx context.Context, book *domain.Book) (string, error) {
	panic("")
}

func (b *BookService) UpdateBook(ctx context.Context, id string, book *domain.Book) (string, error) {
	panic("")
}

func (b *BookService) DeleteBook(ctx context.Context, id string) (string, error) {
	panic("")
}
