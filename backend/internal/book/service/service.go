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

func (b *BookService) GetBooks(ctx context.Context) (*[]domain.BookWithAuthors, error) {
	var booksWithAuthors []domain.BookWithAuthors

	books, err := b.bookRepository.GetBooks(ctx)
	if err != nil {
		return nil, nil
	}

	for _, value := range *books {
		bookWithAuthor, err := b.bookRepository.GetBookWithAuthors(ctx, &value)
		if err != nil {
			return nil, err
		}

		booksWithAuthors = append(booksWithAuthors, *bookWithAuthor)
	}
	return &booksWithAuthors, nil
}

func (b *BookService) GetBookById(ctx context.Context, id string) (*domain.BookWithAuthors, error) {
	panic("")
}

func (b *BookService) AddBook(ctx context.Context, book *domain.Book, authors *[]uint) (string, error) {
	return b.bookRepository.AddBook(ctx, book, authors)
}

func (b *BookService) UpdateBook(ctx context.Context, id string, book *domain.Book) (string, error) {
	panic("")
}

func (b *BookService) DeleteBook(ctx context.Context, id string) (string, error) {
	panic("")
}
