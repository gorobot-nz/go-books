package server

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
	log "github.com/sirupsen/logrus"
	"io/ioutil"
	"path/filepath"

	authorHttp "github.com/gorobot-nz/go-books/internal/author/handler/http"
	authorPostgres "github.com/gorobot-nz/go-books/internal/author/repository/postgres"
	authorService "github.com/gorobot-nz/go-books/internal/author/service"
	bookHttp "github.com/gorobot-nz/go-books/internal/book/handler/http"
	bookPostgres "github.com/gorobot-nz/go-books/internal/book/repository/postgres"
	bookService "github.com/gorobot-nz/go-books/internal/book/service"
	"github.com/gorobot-nz/go-books/internal/domain"
	userHttp "github.com/gorobot-nz/go-books/internal/user/handler/http"
	userPostgres "github.com/gorobot-nz/go-books/internal/user/repository/postgres"
	userService "github.com/gorobot-nz/go-books/internal/user/service"

	"context"
	"net/http"
	"os"
	"os/signal"
	"time"
)

type DbConfig struct {
	Host     string
	Port     string
	Username string
	Password string
	DBName   string
	SSLMode  string
}

type App struct {
	server *http.Server

	userService   domain.UserService
	bookService   domain.BookService
	authorService domain.AuthorService
}

func NewApp() *App {
	cfg := DbConfig{}
	dbConnection := initDb(cfg)

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

func initDb(cfg DbConfig) *sqlx.DB {
	db, err := sqlx.Open("postgres",
		fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=%s",
			cfg.Host, cfg.Port, cfg.Username, cfg.DBName, cfg.Password, cfg.SSLMode))

	if err != nil {
		log.Fatalf("DBConnection error: %s", err.Error())
	}

	err = db.Ping()
	if err != nil {
		log.Fatalf("DBConnection error: %s", err.Error())
	}

	path := filepath.Join(".", "internal", "schema", "migration_up.sql")
	c, ioErr := ioutil.ReadFile(path)
	if ioErr != nil {
		log.Fatalf("DBConnection error: %s", ioErr.Error())
	}

	var schema = string(c)
	db.MustExec(schema)

	return db
}

func checkEnvVars() error {
	return nil
}

func initConfig() error {
	return nil
}
