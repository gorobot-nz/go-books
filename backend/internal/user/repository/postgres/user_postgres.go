package postgres

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/jmoiron/sqlx"
)

type UserRepository struct {
	db *sqlx.DB
}

func NewUserRepository(db *sqlx.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) SignUp(ctx context.Context, user *domain.User) (int, error) {
	return 0, nil
}

func (u *UserRepository) SignIn(ctx context.Context, username, password string) (*domain.User, error) {
	return nil, nil
}
