package main

import (
	"github.com/gorobot-nz/go-books/internal/server"
	log "github.com/sirupsen/logrus"
)

func main() {
	app := server.NewApp()
	if err := app.Run(); err != nil {
		log.Fatalf("%s", err.Error())
	}
}
