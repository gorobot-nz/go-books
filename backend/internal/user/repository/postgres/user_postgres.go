package postgres

import (
	"context"
	"fmt"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/jmoiron/sqlx"
)

const usersTable = "users"

type UserRepository struct {
	db *sqlx.DB
}

func NewUserRepository(db *sqlx.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (r *UserRepository) SignUp(ctx context.Context, user *domain.User) (int, error) {
	var id int

	query := fmt.Sprintf("INSERT INTO %s (username, password) values ($1, $2) RETURNING id", usersTable)

	row := r.db.QueryRow(query, user.Username, user.Password)
	if err := row.Scan(&id); err != nil {
		return 0, err
	}

	return id, nil
}

func (r *UserRepository) SignIn(ctx context.Context, username, password string) (*domain.User, error) {
	return nil, nil
}
