package postgres

import (
	"context"
	"fmt"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/jmoiron/sqlx"
	"strconv"
)

const authorsTable = "authors"

type AuthorRepository struct {
	db *sqlx.DB
}

func NewAuthorRepository(db *sqlx.DB) *AuthorRepository {
	return &AuthorRepository{db: db}
}

func (r *AuthorRepository) AddAuthor(ctx context.Context, author *domain.Author) (string, error) {
	var id int

	query := fmt.Sprintf("INSERT INTO %s (name, surname) values ($1, $2) RETURNING id", authorsTable)

	row := r.db.QueryRow(query, author.Name, author.Surname)
	if err := row.Scan(&id); err != nil {
		return "0", err
	}

	return strconv.Itoa(id), nil
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

func (r *AuthorRepository) GetAuthorById(ctx context.Context, id string) (*domain.Author, error) {
	var author domain.Author
	authorId, err := strconv.Atoi(id)
	if err != nil {
		return nil, err
	}

	query := fmt.Sprintf("SELECT id, name, surname FROM %s WHERE id=$1", authorsTable)

	err = r.db.Select(&author, query, authorId)
	if err != nil {
		return nil, err
	}
	return &author, nil
}

func (r *AuthorRepository) DeleteAuthor(ctx context.Context, id string) (string, error) {
	query := fmt.Sprintf("DELETE FROM %s WHERE id = $1", authorsTable)
	_, err := r.db.Exec(query, id)
	if err != nil {
		return "0", err
	}
	return id, nil
}

func (r *AuthorRepository) UpdateAuthor(ctx context.Context, id string, author *domain.Author) (string, error) {
	//TODO implement me
	panic("implement me")
}
