package domain

type Author struct {
	Id      int    `json:"-" db:"id"`
	Name    string `json:"name" binding:"required" db:"name"`
	Surname string `json:"surname" binding:"required" db:"surname"`
}

type AuthorService interface {
	AddAuthor()
	GetAuthors()
	GetAuthorById()
	DeleteAuthor()
	UpdateAuthor()
}

type AuthorRepository interface {
	AddAuthor()
	GetAuthors()
	GetAuthorById()
	DeleteAuthor()
	UpdateAuthor()
}
