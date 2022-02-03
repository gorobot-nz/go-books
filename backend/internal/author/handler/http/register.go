package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
)

func RegisterEndpoints(r *gin.RouterGroup, service domain.AuthorService) {
	h := NewAuthorHandler(service)

	authorEndpoints := r.Group("author")
	{
		authorEndpoints.POST("", h.AddAuthor)
		authorEndpoints.GET("", h.GetAuthors)
		authorEndpoints.GET("/:id", h.GetAuthorById)
		authorEndpoints.DELETE("/:id", h.DeleteAuthor)
		authorEndpoints.PUT("/:id", h.UpdateAuthor)
	}
}
