package postgres

import (
	"context"
	"fmt"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/jmoiron/sqlx"
	"strconv"
)

const (
	authorsTable      = "authors"
	booksTable        = "book"
	booksAuthorsTable = "books_authors"
)

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

	err = r.db.Get(&author, query, authorId)
	if err != nil {
		return nil, err
	}
	return &author, nil
}

func (r *AuthorRepository) GetAuthorWithBook(ctx context.Context, author *domain.Author) (*domain.AuthorWithBooks, error) {
	var books []domain.Book

	var authorWithBooks domain.AuthorWithBooks
	authorWithBooks.Author = *author

	query := fmt.Sprintf(`SELECT b.id, b.title, b.description, b.price, b.publication_date FROM %s b INNER JOIN %s ba on b.id=ba.book_id
																									INNER JOIN %s a on ba.author_id = a.id WHERE a.id=$1`, booksTable, booksAuthorsTable, authorsTable)
	err := r.db.Select(&books, query, author.Id)
	if err != nil {
		return nil, err
	}
	authorWithBooks.Books = books
	return &authorWithBooks, nil
}

func (r *AuthorRepository) DeleteAuthor(ctx context.Context, id string) (string, error) {
	authorId, err := strconv.Atoi(id)
	if err != nil {
		return "0", err
	}

	query := fmt.Sprintf("DELETE FROM %s WHERE id=$1", authorsTable)

	_, err = r.db.Exec(query, authorId)
	if err != nil {
		return "0", err
	}
	return id, nil
}

func (r *AuthorRepository) UpdateAuthor(ctx context.Context, id string, author *domain.Author) (string, error) {
	authorId, err := strconv.Atoi(id)
	if err != nil {
		return "0", err
	}

	query := fmt.Sprintf("UPDATE %s SET name = $1, surname = $2 WHERE id = $3", authorsTable)

	_, err = r.db.Exec(query, author.Name, author.Surname, authorId)
	if err != nil {
		return "0", nil
	}

	return id, err
}
