package domain

import "context"

type Author struct {
	Id      uint   `json:"id" db:"id"`
	Name    string `json:"name" binding:"required" db:"name"`
	Surname string `json:"surname" binding:"required" db:"surname"`
}

type AuthorService interface {
	AddAuthor(ctx context.Context, author *Author) (int, error)
	GetAuthors(ctx context.Context) (*[]Author, error)
	GetAuthorById(ctx context.Context, id int) (*Author, error)
	DeleteAuthor(ctx context.Context, id int) (int, error)
	UpdateAuthor(ctx context.Context, id int, author *Author) (int error)
}

type AuthorRepository interface {
	AddAuthor(ctx context.Context, author *Author) (int, error)
	GetAuthors(ctx context.Context) (*[]Author, error)
	GetAuthorById(ctx context.Context, id int) (*Author, error)
	DeleteAuthor(ctx context.Context, id int) (int, error)
	UpdateAuthor(ctx context.Context, id int, author *Author) (int error)
}
