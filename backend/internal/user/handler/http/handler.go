package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/gorobot-nz/go-books/internal/utils"
	"net/http"
)

type UserHandler struct {
	service domain.UserService
}

func NewUserHandler(service domain.UserService) *UserHandler {
	return &UserHandler{service: service}
}

func (h *UserHandler) SignUp(c *gin.Context) {
	var user domain.User

	if err := c.BindJSON(&user); err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	id, err := h.service.SignUp(c, &user)
	if err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"id": id,
	})
}

type signInInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func (h *UserHandler) SignIn(c *gin.Context) {
	var input signInInput

	if err := c.BindJSON(&input); err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	user, err := h.service.SignIn(c, input.Username, input.Password)
	if err != nil {
		utils.ErrorMessage(c, err.Error())
		return
	}

	c.JSON(http.StatusAccepted, gin.H{
		"user": user,
	})
}
