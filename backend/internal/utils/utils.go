package utils

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func ErrorMessage(c *gin.Context, message string) {
	c.JSON(http.StatusBadRequest, gin.H{
		"error": message,
	})
}
