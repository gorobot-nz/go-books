package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
)

type Handler struct {
	service domain.UserService
}

func NewHandler(service domain.UserService) *Handler {
	return &Handler{service: service}
}

func (h *Handler) SignUp(c *gin.Context) {

}

func (h *Handler) SignIn(c *gin.Context) {

}
