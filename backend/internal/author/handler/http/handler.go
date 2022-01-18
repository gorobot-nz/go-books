package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
)

type AuthorHandler struct {
	service domain.AuthorService
}

func NewAuthorHandler(service domain.AuthorService) *AuthorHandler {
	return &AuthorHandler{service: service}
}

func (h *AuthorHandler) GetAuthors(c *gin.Context) {

}

func (h *AuthorHandler) GetAuthorId(c *gin.Context) {

}

func (h *AuthorHandler) AddAuthor(c *gin.Context) {

}

func (h *AuthorHandler) DeleteAuthor(c *gin.Context) {

}

func (h *AuthorHandler) UpdateAuthor(c *gin.Context) {

}
