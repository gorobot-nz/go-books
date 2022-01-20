package domain

import "context"

type Book struct {
	Id          uint   `json:"id" db:"id"`
	Title       string `json:"title" binding:"required" db:"title"`
	Description string `json:"description" binding:"required" db:"description"`
	Price       uint   `json:"price" binding:"required" db:"price"`
	Date        string `json:"date" binding:"required" db:"publication_date"`
}

type BookService interface {
	GetBooks(ctx context.Context) (*[]Book, error)
	GetBookById(ctx context.Context, id string) (*Book, error)
	GetBooksByAuthorId(ctx context.Context, id int) (*[]Book, error)
	AddBook(ctx context.Context, book *Book) (string, error)
	AddAuthorToBook(ctx context.Context, bookId, authorId uint) (bool, error)
	UpdateBook(ctx context.Context, id string, book *Book) (string, error)
	DeleteBook(ctx context.Context, id string) (string, error)
}

type BookRepository interface {
	GetBooks(ctx context.Context) (*[]Book, error)
	GetBookById(ctx context.Context, id string) (*Book, error)
	GetBooksByAuthorId(ctx context.Context, id int) (*[]Book, error)
	AddBook(ctx context.Context, book *Book) (string, error)
	AddAuthorToBook(ctx context.Context, bookId, authorId uint) (bool, error)
	UpdateBook(ctx context.Context, id string, book *Book) (string, error)
	DeleteBook(ctx context.Context, id string) (string, error)
}
