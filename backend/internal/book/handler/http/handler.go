package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/gorobot-nz/go-books/internal/utils"
	"net/http"
)

const adminId = 1

type bookInput struct {
	Book    domain.Book `json:"book" binding:"required"`
	Authors []uint      `json:"authors" binding:"required"`
}

type BookHandler struct {
	service domain.BookService
}

func NewBookHandler(service domain.BookService) *BookHandler {
	return &BookHandler{service: service}
}

func (h *BookHandler) GetBooks(c *gin.Context) {
	_, _, ok := utils.GetUserIdAndRole(c)
	if !ok {
		return
	}

	books, err := h.service.GetBooks(c)

	if err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"books": books,
	})
}

func (h *BookHandler) GetBookById(c *gin.Context) {
	_, _, ok := utils.GetUserIdAndRole(c)
	if !ok {
		return
	}

	bookId := c.Param("id")

	result, err := h.service.GetBookById(c, bookId)
	if err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"book":    result.Book,
		"authors": result.Authors,
	})
}

func (h *BookHandler) AddBook(c *gin.Context) {
	_, roleId, ok := utils.GetUserIdAndRole(c)
	if !ok {
		return
	}

	if roleId != adminId {
		utils.AuthErrorMessage(c, "Don't have enough rights")
		return
	}

	var input bookInput
	if err := c.BindJSON(&input); err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	id, err := h.service.AddBook(c, &input.Book, &input.Authors)
	if err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"id": id,
	})
}

func (h *BookHandler) DeleteBook(c *gin.Context) {
	_, _, ok := utils.GetUserIdAndRole(c)
	if !ok {
		return
	}

	bookId := c.Param("id")

	id, err := h.service.DeleteBook(c, bookId)
	if err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"id": id,
	})
}

func (h *BookHandler) UpdateBook(c *gin.Context) {
	_, _, ok := utils.GetUserIdAndRole(c)
	if !ok {
		return
	}

	bookId := c.Param("id")
	var book domain.Book
	if err := c.BindJSON(&book); err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	id, err := h.service.UpdateBook(c, bookId, &book)
	if err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"id": id,
	})
}
