package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
)

func RegisterEndpoints(r *gin.Engine, service domain.StripeService) {
	h := NewStripeHandler(service)

	userEndpoints := r.Group("stripe")
	{
		userEndpoints.POST("accept", h.AcceptPayment)
	}
}
