package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
)

type BookHandler struct {
	service domain.BookService
}

func NewBookHandler(service domain.BookService) *BookHandler {
	return &BookHandler{service: service}
}

func (h *BookHandler) GetBooks(c *gin.Context) {

}

func (h *BookHandler) GetBookById(c *gin.Context) {

}

func (h *BookHandler) AddBook(c *gin.Context) {

}

func (h *BookHandler) DeleteBook(c *gin.Context) {

}

func (h *BookHandler) UpdateBook(c *gin.Context) {

}
