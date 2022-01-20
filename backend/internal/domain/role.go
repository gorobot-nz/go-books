package domain

type Role struct {
	Id       uint   `json:"id" db:"id"`
	RoleName string `json:"roleName" binding:"required" db:"role_name"`
}
