package middleware

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/internal/utils"
	"strings"
)

const (
	authHeader  = "Authorization"
	userCtx     = "userId"
	userRoleCtx = "userRole"
)

func CheckToken() gin.HandlerFunc {
	return func(c *gin.Context) {

		header := c.GetHeader(authHeader)
		if header == "" {
			utils.AuthErrorMessage(c, "Empty header")
			return
		}

		headerParts := strings.Split(header, " ")
		if len(headerParts) != 2 || headerParts[0] != "Bearer" {
			utils.AuthErrorMessage(c, "Wrong header")
			return
		}

		if len(headerParts[1]) == 0 {
			utils.AuthErrorMessage(c, "Empty token")
			return
		}

		userId, userRoleId, err := utils.ParseToken(headerParts[1])
		if err != nil {
			utils.AuthErrorMessage(c, "Wrong token")
			return
		}

		c.Set(userCtx, userId)
		c.Set(userRoleCtx, userRoleId)
		c.Next()
	}
}
