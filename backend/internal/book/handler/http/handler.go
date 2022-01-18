package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
)

type Handler struct {
	service domain.BookService
}

func NewHandler(service domain.BookService) *Handler {
	return &Handler{service: service}
}

func (h *Handler) GetBooks(c *gin.Context) {

}

func (h *Handler) GetBookById(c *gin.Context) {

}

func (h *Handler) AddBook(c *gin.Context) {

}

func (h *Handler) DeleteBook(c *gin.Context) {

}

func (h *Handler) UpdateBook(c *gin.Context) {

}