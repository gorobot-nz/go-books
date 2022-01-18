package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
)

type Handler struct {
	service domain.AuthorService
}

func NewHandler(service domain.AuthorService) *Handler {
	return &Handler{service: service}
}

func (h *Handler) GetAuthors(c *gin.Context) {

}

func (h *Handler) GetAuthorId(c *gin.Context) {

}

func (h *Handler) AddAuthor(c *gin.Context) {

}

func (h *Handler) DeleteAuthor(c *gin.Context) {

}

func (h *Handler) UpdateAuthor(c *gin.Context) {

}
