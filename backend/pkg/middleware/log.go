package middleware

import (
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

func Logging() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Next()
		log.Infof("New request %s | %3d | %s | %s |",
			c.Request.URL,
			c.Writer.Status(),
			c.Request.Method,
			c.Request.RequestURI,
		)
	}
}
