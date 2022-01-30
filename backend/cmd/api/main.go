package main

import (
	"github.com/gorobot-nz/go-books/internal/server"
	log "github.com/sirupsen/logrus"
	"github.com/stripe/stripe-go/v72"
)

func init() {
	stripe.Key = "sk_test_51KM8UWD5oBk3DmS9s5RmF1IbIsr1etbW8eFVkWN1KEGEdvtCEQWNBiIcLxa8GNbQE13kRCz7KnqxGDHqpRXXPgNq00cYTbvywm"
}

func main() {
	app := server.NewApp()
	if err := app.Run(); err != nil {
		log.Fatalf("%s", err.Error())
	}
}
