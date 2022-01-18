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

func (b *BookRepository) GetBooks(ctx context.Context) (*[]domain.Book, error) {
	//TODO implement me
	panic("implement me")
}

func (b *BookRepository) GetBookById(ctx context.Context, id string) (*domain.Book, error) {
	//TODO implement me
	panic("implement me")
}

func (b *BookRepository) GetBooksByAuthorId(ctx context.Context, id int) (*[]domain.Book, error) {
	//TODO implement me
	panic("implement me")
}

func (b *BookRepository) AddBook(ctx context.Context, book *domain.Book) (string, error) {
	var id int

	date, err := time.Parse(dateLayout, book.Date)
	if err != nil {
		return "0", err
	}

	query := fmt.Sprintf("INSERT INTO %s (userId, title, desctiprion, price, date) values ($1, $2, $3, $4, $5) RETURNING id", booksTable)

	row := b.db.QueryRow(query, book.UserId, book.Title, book.Description, book.Price, date)
	if err := row.Scan(&id); err != nil {
		return "0", err
	}

	return strconv.Itoa(id), nil
}

func (b *BookRepository) UpdateBook(ctx context.Context, id string, book *domain.Book) (string, error) {
	//TODO implement me
	panic("implement me")
}

func (b *BookRepository) DeleteBook(ctx context.Context, id string) (string, error) {
	//TODO implement me
	panic("implement me")
}
