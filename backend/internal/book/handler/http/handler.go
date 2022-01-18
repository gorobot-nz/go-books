package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/gorobot-nz/go-books/internal/utils"
	"net/http"
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
	var book domain.Book

	if err := c.BindJSON(&book); err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	id, err := h.service.AddBook(c, &book)
	if err != nil {
		utils.ErrorMessage(c, err.Error())
	}

	c.JSON(http.StatusCreated, gin.H{
		"id": id,
	})
}

func (h *BookHandler) DeleteBook(c *gin.Context) {

}

func (h *BookHandler) UpdateBook(c *gin.Context) {

}
