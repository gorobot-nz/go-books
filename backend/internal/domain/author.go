package domain

import "context"

type Author struct {
	Id      uint   `json:"id" db:"id"`
	Name    string `json:"name" binding:"required" db:"name"`
	Surname string `json:"surname" binding:"required" db:"surname"`
}

type AuthorWithBooks struct {
	Author Author `json:"author"`
	Books  []Book `json:"book"`
}

type AuthorService interface {
	AddAuthor(ctx context.Context, author *Author) (string, error)
	GetAuthors(ctx context.Context) (*[]AuthorWithBooks, error)
	GetAuthorById(ctx context.Context, id string) (*AuthorWithBooks, error)
	DeleteAuthor(ctx context.Context, id string) (string, error)
	UpdateAuthor(ctx context.Context, id string, author *Author) (string, error)
}

type AuthorRepository interface {
	AddAuthor(ctx context.Context, author *Author) (string, error)
	GetAuthors(ctx context.Context) (*[]Author, error)
	GetAuthorById(ctx context.Context, id string) (*Author, error)
	GetAuthorWithBook(ctx context.Context, author *Author) (*AuthorWithBooks, error)
	DeleteAuthor(ctx context.Context, id string) (string, error)
	UpdateAuthor(ctx context.Context, id string, author *Author) (string, error)
}
