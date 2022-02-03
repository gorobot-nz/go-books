package main

import (
	"github.com/gorobot-nz/go-books/internal/server"
	log "github.com/sirupsen/logrus"
	"github.com/stripe/stripe-go/v72"
)

func init() {
	stripe.Key = ""
}

func main() {
	app := server.NewApp()
	if err := app.Run(); err != nil {
		log.Fatalf("%s", err.Error())
	}
}
