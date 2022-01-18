package server

import (
	"context"
	"github.com/gin-gonic/gin"
	authorHttp "github.com/gorobot-nz/go-books/internal/author/handler/http"
	authorPostgres "github.com/gorobot-nz/go-books/internal/author/repository/postgres"
	authorService "github.com/gorobot-nz/go-books/internal/author/service"
	bookHttp "github.com/gorobot-nz/go-books/internal/book/handler/http"
	bookPostgres "github.com/gorobot-nz/go-books/internal/book/repository/postgres"
	bookService "github.com/gorobot-nz/go-books/internal/book/service"
	userHttp "github.com/gorobot-nz/go-books/internal/user/handler/http"
	userPostgres "github.com/gorobot-nz/go-books/internal/user/repository/postgres"
	userService "github.com/gorobot-nz/go-books/internal/user/service"
	log "github.com/sirupsen/logrus"
	"os"
	"os/signal"
	"time"

	"github.com/gorobot-nz/go-books/internal/domain"

	"github.com/jmoiron/sqlx"

	"net/http"
)

type App struct {
	server *http.Server

	userService   domain.UserService
	bookService   domain.BookService
	authorService domain.AuthorService
}

func NewApp() *App {
	dbConnection := initDb()

	userRepository := userPostgres.NewUserRepository(dbConnection)
	bookRepository := bookPostgres.NewBookRepository(dbConnection)
	authorRepository := authorPostgres.NewAuthorRepository(dbConnection)

	return &App{
		userService:   userService.NewUserService(userRepository),
		bookService:   bookService.NewBookService(bookRepository),
		authorService: authorService.NewAuthorService(authorRepository),
	}
}

func (a *App) Run() error {
	router := gin.Default()
	api := router.Group("api")

	authorHttp.RegisterEndpoints(api, a.authorService)
	bookHttp.RegisterEndpoints(api, a.bookService)
	userHttp.RegisterEndpoints(router, a.userService)

	a.server = &http.Server{
		Addr:           ":8000",
		Handler:        router,
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}

	go func() {
		if err := a.server.ListenAndServe(); err != nil {
			log.Fatalf("Failed to listen and serve: %+v", err)
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt, os.Interrupt)

	<-quit

	ctx, shutdown := context.WithTimeout(context.Background(), 5*time.Second)
	defer shutdown()

	return a.server.Shutdown(ctx)
}

func initDb() *sqlx.DB {
	return nil
}
