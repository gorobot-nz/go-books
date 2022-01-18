package postgres

import (
	"context"
	"fmt"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/jmoiron/sqlx"
)

const authorsTable = "authors"

type AuthorRepository struct {
	db *sqlx.DB
}

func NewAuthorRepository(db *sqlx.DB) *AuthorRepository {
	return &AuthorRepository{db: db}
}

func (r *AuthorRepository) AddAuthor(ctx context.Context, author *domain.Author) (int, error) {
	var id int

	query := fmt.Sprintf("INSERT INTO %s (name, surname) values ($1, $2) RETURNING id", authorsTable)

	row := r.db.QueryRow(query, author.Name, author.Surname)
	if err := row.Scan(&id); err != nil {
		return 0, err
	}

	return id, nil
}

func (r *AuthorRepository) GetAuthors(ctx context.Context) (*[]domain.Author, error) {
	var authors []domain.Author

	query := fmt.Sprintf("SELECT id, name, surname FROM %s", authorsTable)

	err := r.db.Select(&authors, query)
	if err != nil {
		return nil, err
	}
	return &authors, nil
}

func (r *AuthorRepository) GetAuthorById(ctx context.Context, id int) (*domain.Author, error) {
	//TODO implement me
	panic("implement me")
}

func (r *AuthorRepository) DeleteAuthor(ctx context.Context, id int) (int, error) {
	//TODO implement me
	panic("implement me")
}

func (r *AuthorRepository) UpdateAuthor(ctx context.Context, id int, author *domain.Author) (int error) {
	//TODO implement me
	panic("implement me")
}
