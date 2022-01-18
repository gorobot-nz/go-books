package domain

type User struct {
	Id       int    `json:"-" db:"id"`
	Username string `json:"username" binding:"required" db:"username"'`
	Password string `json:"password" binding:"required" db:"password"`
}

type UserService interface {
	SignUp()
	SignIn()
}

type UserRepository interface {
	SignUp()
	SignIn()
}
