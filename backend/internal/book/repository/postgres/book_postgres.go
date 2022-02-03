package postgres

import (
	"context"
	"fmt"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/jmoiron/sqlx"
	"strconv"
	"time"
)

const (
	booksTable        = "books"
	booksAuthorsTable = "books_authors"
	authorsTable      = "authors"
	dateLayout        = "2006"
)

type BookRepository struct {
	db *sqlx.DB
}

func NewBookRepository(db *sqlx.DB) *BookRepository {
	return &BookRepository{db: db}
}

func (r *BookRepository) GetBooks(ctx context.Context) (*[]domain.Book, error) {
	var books []domain.Book

	query := fmt.Sprintf("SELECT id, title, description, price, publication_date FROM %s", booksTable)

	err := r.db.Select(&books, query)
	if err != nil {
		return nil, err
	}
	return &books, nil
}

func (r *BookRepository) GetBookById(ctx context.Context, id string) (*domain.Book, error) {
	var book domain.Book
	bookId, err := strconv.Atoi(id)
	if err != nil {
		return nil, err
	}

	query := fmt.Sprintf("SELECT id, title, description, price, publication_date FROM %s WHERE id=$1", booksTable)

	err = r.db.Get(&book, query, bookId)
	if err != nil {
		return nil, err
	}
	return &book, nil
}

func (r *BookRepository) GetBookWithAuthors(ctx context.Context, book *domain.Book) (*domain.BookWithAuthors, error) {
	var authors []domain.Author

	var bookWithAuthors domain.BookWithAuthors
	bookWithAuthors.Book = *book

	query := fmt.Sprintf(`SELECT a.id, a.name, a.surname FROM %s a INNER JOIN %s ba ON a.id=ba.author_id
																			INNER JOIN %s b ON ba.book_id=b.id WHERE b.id=$1`, authorsTable, booksAuthorsTable, booksTable)

	err := r.db.Select(&authors, query, book.Id)
	if err != nil {
		return nil, err
	}
	bookWithAuthors.Authors = authors
	return &bookWithAuthors, nil
}

func (r *BookRepository) AddBook(ctx context.Context, book *domain.Book, authors *[]uint) (string, error) {
	var id int

	date, err := time.Parse(dateLayout, book.Date)
	if err != nil {
		return "0", err
	}

	tx, err := r.db.Begin()

	query := fmt.Sprintf("INSERT INTO %s (title, description, price, publication_date) values ($1, $2, $3, $4) RETURNING id", booksTable)

	row := tx.QueryRow(query, book.Title, book.Description, book.Price, date)
	if err := row.Scan(&id); err != nil {
		tx.Rollback()
		return "0", err
	}

	connectBookAndAuthorsQuery := fmt.Sprintf("INSERT INTO %s (book_id, author_id) values ($1, $2)", booksAuthorsTable)
	for _, value := range *authors {
		_, err := tx.Exec(connectBookAndAuthorsQuery, id, value)
		if err != nil {
			tx.Rollback()
			return "0", err
		}
	}

	return strconv.Itoa(id), tx.Commit()
}

func (r *BookRepository) UpdateBook(ctx context.Context, id string, book *domain.Book) (string, error) {
	bookId, err := strconv.Atoi(id)
	if err != nil {
		return "0", err
	}

	date, err := time.Parse(dateLayout, book.Date)
	if err != nil {
		return "0", err
	}

	query := fmt.Sprintf("UPDATE %s "+
		"SET title=$1, description=$2, price=$3, publication_date=$4 WHERE id=$5", booksTable)

	_, err = r.db.Exec(query, book.Title, book.Description, book.Price, date, bookId)
	if err != nil {
		return "0", err
	}

	return id, err
}

func (r *BookRepository) DeleteBook(ctx context.Context, id string) (string, error) {
	bookId, err := strconv.Atoi(id)
	if err != nil {
		return "0", err
	}

	query := fmt.Sprintf("DELETE FROM %s WHERE id=$1", booksTable)

	_, err = r.db.Exec(query, bookId)
	if err != nil {
		return "0", err
	}
	return id, nil
}
