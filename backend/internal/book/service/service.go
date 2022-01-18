package service

import "github.com/gorobot-nz/go-books/internal/domain"

type BookService struct {
	repository domain.BookRepository
}

func NewBookService(repository domain.BookRepository) *BookService {
	return &BookService{repository: repository}
}

func (b *BookService) GetBooks() {
	//TODO implement me
	panic("implement me")
}

func (b *BookService) GetBookById() {
	//TODO implement me
	panic("implement me")
}

func (b *BookService) GetBookByAuthorId() {
	//TODO implement me
	panic("implement me")
}

func (b *BookService) AddBook() {
	//TODO implement me
	panic("implement me")
}

func (b *BookService) UpdateBook() {
	//TODO implement me
	panic("implement me")
}

func (b BookService) DeleteBook() {
	//TODO implement me
	panic("implement me")
}
