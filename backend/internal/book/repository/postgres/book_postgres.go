package postgres

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/jmoiron/sqlx"
)

type BookRepository struct {
	db *sqlx.DB
}

func NewBookRepository(db *sqlx.DB) *BookRepository {
	return &BookRepository{db: db}
}

func (b BookRepository) GetBooks(ctx context.Context) (*[]domain.Book, error) {
	//TODO implement me
	panic("implement me")
}

func (b BookRepository) GetBookById(ctx context.Context, id int) (*domain.Book, error) {
	//TODO implement me
	panic("implement me")
}

func (b BookRepository) GetBooksByAuthorId(ctx context.Context, id int) (*[]domain.Book, error) {
	//TODO implement me
	panic("implement me")
}

func (b BookRepository) AddBook(ctx context.Context, book *domain.Book) (int, error) {
	//TODO implement me
	panic("implement me")
}

func (b BookRepository) UpdateBook(ctx context.Context, id int, book *domain.Book) (int, error) {
	//TODO implement me
	panic("implement me")
}

func (b BookRepository) DeleteBook(ctx context.Context, id int) {
	//TODO implement me
	panic("implement me")
}
