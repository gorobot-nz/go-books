package domain

import "context"

type User struct {
	Id       uint   `json:"-" db:"id"`
	Username string `json:"username" binding:"required" db:"username"`
	Password string `json:"password" binding:"required" db:"password"`
}

type UserService interface {
	SignUp(ctx context.Context, user *User) (int, error)
	SignIn(ctx context.Context, username, password string) (*User, error)
}

type UserRepository interface {
	SignUp(ctx context.Context, user *User) (int, error)
	SignIn(ctx context.Context, username, password string) (*User, error)
}
