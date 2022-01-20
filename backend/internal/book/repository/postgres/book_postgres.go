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
	booksTable = "books"
	dateLayout = "2006"
)

type BookRepository struct {
	db *sqlx.DB
}

func NewBookRepository(db *sqlx.DB) *BookRepository {
	return &BookRepository{db: db}
}

func (r *BookRepository) GetBooks(ctx context.Context) (*[]domain.Book, error) {
	var books []domain.Book

	query := fmt.Sprintf("SELECT id, user_id, title, description, price, publication_date FROM %s", booksTable)

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

	query := fmt.Sprintf("SELECT id, user_id, title, description, price, publication_date FROM %s WHERE id=$1", booksTable)

	err = r.db.Get(&book, query, bookId)
	if err != nil {
		return nil, err
	}
	return &book, nil
}

func (r *BookRepository) GetBooksByAuthorId(ctx context.Context, id int) (*[]domain.Book, error) {
	//TODO implement me
	panic("implement me")
}

func (r *BookRepository) AddAuthorToBook(ctx context.Context, bookId, authorId uint) (bool, error) {
	//TODO implement me
	panic("implement me")
}

func (r *BookRepository) AddBook(ctx context.Context, book *domain.Book) (string, error) {
	var id int

	date, err := time.Parse(dateLayout, book.Date)
	if err != nil {
		return "0", err
	}

	query := fmt.Sprintf("INSERT INTO %s (title, description, price, publication_date) values ($1, $2, $3, $4) RETURNING id", booksTable)

	row := r.db.QueryRow(query, book.Title, book.Description, book.Price, date)
	if err := row.Scan(&id); err != nil {
		return "0", err
	}

	return strconv.Itoa(id), nil
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
