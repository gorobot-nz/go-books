package service

import (
	"context"
	"github.com/gorobot-nz/go-books/internal/domain"
)

type AuthorService struct {
	repository domain.AuthorRepository
}

func NewAuthorService(repository domain.AuthorRepository) *AuthorService {
	return &AuthorService{repository: repository}
}

func (s *AuthorService) AddAuthor(ctx context.Context, author *domain.Author) (string, error) {
	return s.repository.AddAuthor(ctx, author)
}

func (s *AuthorService) GetAuthors(ctx context.Context) (*[]domain.Author, error) {
	return s.repository.GetAuthors(ctx)
}

func (s *AuthorService) GetAuthorById(ctx context.Context, id string) (*domain.Author, error) {
	return s.repository.GetAuthorById(ctx, id)
}

func (s *AuthorService) DeleteAuthor(ctx context.Context, id string) (string, error) {
	return s.repository.DeleteAuthor(ctx, id)
}

func (s *AuthorService) UpdateAuthor(ctx context.Context, id string, author *domain.Author) (string, error) {
	return s.repository.UpdateAuthor(ctx, id, author)
}
