package postgres

import "github.com/jmoiron/sqlx"

type BookRepository struct {
	db *sqlx.DB
}

func NewBookRepository(db *sqlx.DB) *BookRepository {
	return &BookRepository{db: db}
}

func (b *BookRepository) GetBooks() {
	//TODO implement me
	panic("implement me")
}

func (b *BookRepository) GetBookById() {
	//TODO implement me
	panic("implement me")
}

func (b *BookRepository) GetBookByAuthorId() {
	//TODO implement me
	panic("implement me")
}

func (b *BookRepository) AddBook() {
	//TODO implement me
	panic("implement me")
}

func (b *BookRepository) UpdateBook() {
	//TODO implement me
	panic("implement me")
}

func (b *BookRepository) DeleteBook() {
	//TODO implement me
	panic("implement me")
}
