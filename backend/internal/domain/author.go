package domain

import "context"

type Author struct {
	Id      uint   `json:"id" db:"id"`
	Name    string `json:"name" binding:"required" db:"name"`
	Surname string `json:"surname" binding:"required" db:"surname"`
}

type AuthorWithBooks struct {
	Author Author
	Books  []Book
}

type AuthorService interface {
	AddAuthor(ctx context.Context, author *Author) (string, error)
	GetAuthors(ctx context.Context) (*[]Author, error)
	GetAuthorById(ctx context.Context, id string) (*Author, error)
	DeleteAuthor(ctx context.Context, id string) (string, error)
	UpdateAuthor(ctx context.Context, id string, author *Author) (string, error)
}

type AuthorRepository interface {
	AddAuthor(ctx context.Context, author *Author) (string, error)
	GetAuthors(ctx context.Context) (*[]Author, error)
	GetAuthorById(ctx context.Context, id string) (*Author, error)
	DeleteAuthor(ctx context.Context, id string) (string, error)
	UpdateAuthor(ctx context.Context, id string, author *Author) (string, error)
}
