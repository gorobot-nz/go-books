package domain

type Book struct {
	Id          uint   `json:"-" db:"id"`
	UserId      uint   `json:"userId" binding:"required" db:"user_id"`
	Title       string `json:"title" binding:"required" db:"title"`
	Description string `json:"description" binding:"required" db:"description"`
	Price       uint   `json:"price" binding:"required" db:"price"`
	Date        string `json:"date" binding:"required" db:"publication_date"`
}

type BookService interface {
	GetBooks()
	GetBookById()
	GetBookByAuthorId()
	AddBook()
	UpdateBook()
	DeleteBook()
}

type BookRepository interface {
	GetBooks()
	GetBookById()
	GetBookByAuthorId()
	AddBook()
	UpdateBook()
	DeleteBook()
}
