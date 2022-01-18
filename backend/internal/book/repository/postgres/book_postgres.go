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

	query := fmt.Sprintf("SELECT id, userId, title, desctiprion, price, date FROM %s", booksTable)

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

	query := fmt.Sprintf("SELECT id, userId, title, desctiprion, price, date FROM %s WHERE id=$1", booksTable)

	err = r.db.Select(&book, query, bookId)
	if err != nil {
		return nil, err
	}
	return &book, nil
}

func (r *BookRepository) GetBooksByAuthorId(ctx context.Context, id int) (*[]domain.Book, error) {
	//TODO implement me
	panic("implement me")
}

func (r *BookRepository) AddBook(ctx context.Context, book *domain.Book) (string, error) {
	var id int

	date, err := time.Parse(dateLayout, book.Date)
	if err != nil {
		return "0", err
	}

	query := fmt.Sprintf("INSERT INTO %s (userId, title, desctiprion, price, date) values ($1, $2, $3, $4, $5) RETURNING id", booksTable)

	row := r.db.QueryRow(query, book.UserId, book.Title, book.Description, book.Price, date)
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

	query := fmt.Sprintf("UPDATE %s "+
		"SET userId=$1, title=$2, desctiprion=$3, price=$4, date=$5 WHERE id=$6", booksTable)

	_, err = r.db.Exec(query, book.UserId, book.Title, book.Description, book.Price, book.Date, bookId)
	if err != nil {
		return "0", nil
	}

	return id, err
}

func (b *BookRepository) DeleteBook(ctx context.Context, id string) (string, error) {
	//TODO implement me
	panic("implement me")
}
