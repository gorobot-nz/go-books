package postgres

import "github.com/jmoiron/sqlx"

type UserRepository struct {
	db *sqlx.DB
}

func NewUserRepository(db *sqlx.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) SignUp() {
	//TODO implement me
	panic("implement me")
}

func (u *UserRepository) SignIn() {
	//TODO implement me
	panic("implement me")
}
