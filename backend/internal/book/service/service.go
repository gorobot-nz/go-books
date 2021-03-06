package service

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
)

type BookService struct {
	bookRepository domain.BookRepository
}

func NewBookService(bookRepository domain.BookRepository) *BookService {
	return &BookService{bookRepository: bookRepository}
}

func (b *BookService) GetBooks(ctx context.Context) (*[]domain.BookWithAuthors, error) {
	var booksWithAuthors []domain.BookWithAuthors

	books, err := b.bookRepository.GetBooks(ctx)
	if err != nil {
		return nil, err
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
	book, err := b.bookRepository.GetBookById(ctx, id)
	if err != nil {
		return nil, nil
	}

	bookWithAuthors, err := b.bookRepository.GetBookWithAuthors(ctx, book)
	if err != nil {
		return nil, nil
	}
	return bookWithAuthors, nil
}

func (b *BookService) AddBook(ctx context.Context, book *domain.Book, authors *[]uint) (string, error) {
	return b.bookRepository.AddBook(ctx, book, authors)
}

func (b *BookService) UpdateBook(ctx context.Context, id string, book *domain.Book) (string, error) {
	return b.bookRepository.UpdateBook(ctx, id, book)
}

func (b *BookService) DeleteBook(ctx context.Context, id string) (string, error) {
	return b.bookRepository.DeleteBook(ctx, id)
}
