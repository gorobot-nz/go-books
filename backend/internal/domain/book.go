package domain

type Book struct {
	Id    int    `json:"-" db:"id"`
	Title string `json:"title" binding:"required" db:"title"`
	Date  string `json:"year" binding:"required" db:"publication_date"'`
}

type BookService interface {
	GetBooks()
	GetBookById()
	AddBook()
	UpdateBook()
	DeleteBook()
}

type BookRepository interface {
	GetBooks()
	GetBookById()
	AddBook()
	UpdateBook()
	DeleteBook()
}
