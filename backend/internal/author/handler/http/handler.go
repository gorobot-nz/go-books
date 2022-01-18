package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/gorobot-nz/go-books/internal/utils"
	"net/http"
)

type AuthorHandler struct {
	service domain.AuthorService
}

func NewAuthorHandler(service domain.AuthorService) *AuthorHandler {
	return &AuthorHandler{service: service}
}

func (h *AuthorHandler) GetAuthors(c *gin.Context) {
	authors, err := h.service.GetAuthors(c)

	if err != nil {
		utils.ErrorMessage(c, err.Error())
	}

	c.JSON(http.StatusOK, gin.H{
		"authors": authors,
	})
}

func (h *AuthorHandler) GetAuthorById(c *gin.Context) {

}

func (h *AuthorHandler) AddAuthor(c *gin.Context) {
	var author domain.Author

	if err := c.BindJSON(&author); err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	id, err := h.service.AddAuthor(c, &author)
	if err != nil {
		utils.ErrorMessage(c, err.Error())
	}

	c.JSON(http.StatusCreated, gin.H{
		"id": id,
	})
}

func (h *AuthorHandler) DeleteAuthor(c *gin.Context) {

}

func (h *AuthorHandler) UpdateAuthor(c *gin.Context) {

}
