package domain

import "context"

type User struct {
	Id       uint   `json:"id" db:"id"`
	Username string `json:"username" binding:"required" db:"username"`
	Password string `json:"password" binding:"required" db:"password"`
	Name     string `json:"name" binding:"required" db:"name"`
	Surname  string `json:"surname" binding:"required" db:"surname"`
	RoleId   uint   `json:"roleId" db:"role_id"`
}

type UserService interface {
	SignUp(ctx context.Context, user *User) (uint, error)
	SignIn(ctx context.Context, username, password string) (string, error)
}

type UserRepository interface {
	SignUp(ctx context.Context, user *User) (uint, error)
	SignIn(ctx context.Context, username, password string) (*User, error)
}
