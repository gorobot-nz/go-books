package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/gorobot-nz/go-books/internal/utils"
	"net/http"
)

const adminId = 1

type AuthorHandler struct {
	service domain.AuthorService
}

func NewAuthorHandler(service domain.AuthorService) *AuthorHandler {
	return &AuthorHandler{service: service}
}

func (h *AuthorHandler) AddAuthor(c *gin.Context) {
	_, roleId, ok := utils.GetUserIdAndRole(c)
	if !ok {
		return
	}

	if roleId != adminId {
		utils.AuthErrorMessage(c, "Don't have enough rights")
		return
	}

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

func (h *AuthorHandler) GetAuthors(c *gin.Context) {
	_, _, ok := utils.GetUserIdAndRole(c)
	if !ok {
		return
	}

	authors, err := h.service.GetAuthors(c)

	if err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"authors": authors,
	})
}

func (h *AuthorHandler) GetAuthorById(c *gin.Context) {
	_, _, ok := utils.GetUserIdAndRole(c)
	if !ok {
		return
	}

	authorId := c.Param("id")

	result, err := h.service.GetAuthorById(c, authorId)
	if err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"author": result.Author,
		"book":   result.Books,
	})
}

func (h *AuthorHandler) DeleteAuthor(c *gin.Context) {
	_, roleId, ok := utils.GetUserIdAndRole(c)
	if !ok {
		return
	}

	if roleId != adminId {
		utils.AuthErrorMessage(c, "Don't have enough rights")
		return
	}

	authorId := c.Param("id")

	id, err := h.service.DeleteAuthor(c, authorId)
	if err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"id": id,
	})
}

func (h *AuthorHandler) UpdateAuthor(c *gin.Context) {
	_, roleId, ok := utils.GetUserIdAndRole(c)
	if !ok {
		return
	}

	if roleId != adminId {
		utils.AuthErrorMessage(c, "Don't have enough rights")
		return
	}

	authorId := c.Param("id")
	var author domain.Author

	if err := c.BindJSON(&author); err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	id, err := h.service.UpdateAuthor(c, authorId, &author)
	if err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"id": id,
	})
}
