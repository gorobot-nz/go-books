package postgres

import "github.com/jmoiron/sqlx"

type AuthorRepository struct {
	db *sqlx.DB
}

func NewAuthorRepository(db *sqlx.DB) *AuthorRepository {
	return &AuthorRepository{db: db}
}

func (a *AuthorRepository) AddAuthor() {
	//TODO implement me
	panic("implement me")
}

func (a *AuthorRepository) GetAuthors() {
	//TODO implement me
	panic("implement me")
}

func (a *AuthorRepository) GetAuthorById() {
	//TODO implement me
	panic("implement me")
}

func (a *AuthorRepository) DeleteAuthor() {
	//TODO implement me
	panic("implement me")
}

func (a *AuthorRepository) UpdateAuthor() {
	//TODO implement me
	panic("implement me")
}
