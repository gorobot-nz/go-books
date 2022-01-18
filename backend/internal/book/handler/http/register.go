package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
)

func RegisterEndpoints(r *gin.RouterGroup, service domain.BookService) {
	h := NewBookHandler(service)

	bookEndpoints := r.Group("/book")
	{
		bookEndpoints.POST("", h.AddBook)
		bookEndpoints.GET("", h.GetBooks)
		bookEndpoints.GET("/:id", h.GetBookById)
		bookEndpoints.PUT("/:id", h.UpdateBook)
		bookEndpoints.DELETE("/:id", h.DeleteBook)
	}
}
