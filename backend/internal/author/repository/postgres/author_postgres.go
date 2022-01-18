package postgres

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/jmoiron/sqlx"
)

type AuthorRepository struct {
	db *sqlx.DB
}

func NewAuthorRepository(db *sqlx.DB) *AuthorRepository {
	return &AuthorRepository{db: db}
}

func (a AuthorRepository) AddAuthor(ctx context.Context, author *domain.Author) (int, error) {
	//TODO implement me
	panic("implement me")
}

func (a AuthorRepository) GetAuthors(ctx context.Context) (*[]domain.Author, error) {
	//TODO implement me
	panic("implement me")
}

func (a AuthorRepository) GetAuthorById(ctx context.Context, id int) (*domain.Author, error) {
	//TODO implement me
	panic("implement me")
}

func (a AuthorRepository) DeleteAuthor(ctx context.Context, id int) (int, error) {
	//TODO implement me
	panic("implement me")
}

func (a AuthorRepository) UpdateAuthor(ctx context.Context, id int, author *domain.Author) (int error) {
	//TODO implement me
	panic("implement me")
}
