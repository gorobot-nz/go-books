package server

import (
	"github.com/gin-gonic/gin"
	"github.com/gorobot-nz/go-books/pkg/middleware"
	"github.com/jmoiron/sqlx"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/viper"

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
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"strings"
	"time"
)

const (
	appPort    = "port"
	dbHost     = "POSTGRES_HOST"
	dbUsername = "POSTGRES_USER"
	dbPassword = "POSTGRES_PASSWORD"
	dbName     = "db.POSTGRES_DBNAME"
	dbPort     = "db.POSTGRES_DBPORT"
	dbSSLMode  = "db.POSTGRES_SSLMODE"
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
	initLog()
	initConfig()
	checkEnvVars()

	cfg := DbConfig{
		Host:     os.Getenv(dbHost),
		Username: os.Getenv(dbUsername),
		Password: os.Getenv(dbPassword),
		DBName:   viper.GetString(dbName),
		Port:     viper.GetString(dbPort),
		SSLMode:  viper.GetString(dbSSLMode),
	}
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
	gin.SetMode(gin.ReleaseMode)

	router := gin.Default()
	api := router.Group("api")

	router.Use(middleware.CORS())
	router.Use(middleware.Logging())

	authorHttp.RegisterEndpoints(api, a.authorService)
	bookHttp.RegisterEndpoints(api, a.bookService)
	userHttp.RegisterEndpoints(router, a.userService)

	a.server = &http.Server{
		Addr:           ":" + viper.GetString(appPort),
		Handler:        router,
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}

	log.Info("Server start")

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

func initLog() {
	logger := log.New()
	logger.SetFormatter(&log.JSONFormatter{})
}

func checkEnvVars() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Env error: %s", err.Error())
	}

	requiredEnvs := []string{dbHost, dbUsername, dbPassword}
	var msg []string
	for _, el := range requiredEnvs {
		val, exists := os.LookupEnv(el)
		if !exists || len(val) == 0 {
			msg = append(msg, el)
		}
	}
	if len(msg) > 0 {
		log.Fatal(strings.Join(msg, ", "), " env(s) not set")
	}
}

func initConfig() {
	viper.AddConfigPath("configs")
	viper.SetConfigName("config")
	if err := viper.ReadInConfig(); err != nil {
		log.Fatal("Error of config init")
	}
}
