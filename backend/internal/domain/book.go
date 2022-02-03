package domain

import "context"

type Book struct {
	Id          uint   `json:"id" db:"id"`
	Title       string `json:"title" binding:"required" db:"title"`
	Description string `json:"description" binding:"required" db:"description"`
	Price       uint   `json:"price" binding:"required" db:"price"`
	Date        string `json:"date" binding:"required" db:"publication_date"`
}

type BookWithAuthors struct {
	Book    Book     `json:"book"`
	Authors []Author `json:"authors"`
}

type BookService interface {
	GetBooks(ctx context.Context) (*[]BookWithAuthors, error)
	GetBookById(ctx context.Context, id string) (*BookWithAuthors, error)
	AddBook(ctx context.Context, book *Book, authors *[]uint) (string, error)
	UpdateBook(ctx context.Context, id string, book *Book) (string, error)
	DeleteBook(ctx context.Context, id string) (string, error)
}

type BookRepository interface {
	GetBooks(ctx context.Context) (*[]Book, error)
	GetBookById(ctx context.Context, id string) (*Book, error)
	GetBookWithAuthors(ctx context.Context, book *Book) (*BookWithAuthors, error)
	AddBook(ctx context.Context, book *Book, authors *[]uint) (string, error)
	UpdateBook(ctx context.Context, id string, book *Book) (string, error)
	DeleteBook(ctx context.Context, id string) (string, error)
}
