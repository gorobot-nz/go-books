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

func (r *UserRepository) SignUp(ctx context.Context, user *domain.User) (uint, error) {
	var id uint

	query := fmt.Sprintf("INSERT INTO %s (username, password) values ($1, $2) RETURNING id", usersTable)

	row := r.db.QueryRow(query, user.Username, user.Password)
	if err := row.Scan(&id); err != nil {
		return 0, err
	}

	return id, nil
}

func (r *UserRepository) SignIn(ctx context.Context, username, password string) (*domain.User, error) {
	var user domain.User

	query := fmt.Sprintf("SELECT id, username, password FROM %s WHERE username=$1 AND password=$2", usersTable)
	err := r.db.Get(&user, query, username, password)
	return &user, err
}
