package http

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/gorobot-nz/go-books/internal/utils"
	"net/http"
)

type StripeHandler struct {
	service domain.StripeService
}

func NewStripeHandler(service domain.StripeService) *StripeHandler {
	return &StripeHandler{service: service}
}

func (h *StripeHandler) AcceptPayment(c *gin.Context) {
	var stripeInput domain.StripeInput

	if err := c.BindJSON(&stripeInput); err != nil {
		utils.ErrorMessage(c, "wrong params")
	}

	stripeSession, _ := h.service.CreateSession(&stripeInput)

	c.JSON(http.StatusOK, gin.H{
		"id": stripeSession.ID,
	})
}
