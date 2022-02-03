package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
)

func RegisterEndpoints(r *gin.Engine, service domain.UserService) {
	h := NewUserHandler(service)

	userEndpoints := r.Group("auth")
	{
		userEndpoints.POST("signup", h.SignUp)
		userEndpoints.POST("signin", h.SignIn)
	}
}
