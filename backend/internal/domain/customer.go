package domain

type Customer struct {
	User
	Name    string `json:"name" binding:"required" db:"name"`
	Surname string `json:"surname" binding:"required" db:"surname"`
}
