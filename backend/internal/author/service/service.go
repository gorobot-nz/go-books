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

func (s *AuthorService) GetAuthors(ctx context.Context) (*[]domain.AuthorWithBooks, error) {
	var authorsWithBooks []domain.AuthorWithBooks

	authors, err := s.repository.GetAuthors(ctx)
	if err != nil {
		return nil, err
	}

	for _, value := range *authors {
		authorWithBook, err := s.repository.GetAuthorWithBook(ctx, &value)
		if err != nil {
			return nil, err
		}

		authorsWithBooks = append(authorsWithBooks, *authorWithBook)
	}
	return &authorsWithBooks, nil
}

func (s *AuthorService) GetAuthorById(ctx context.Context, id string) (*domain.AuthorWithBooks, error) {
	return nil, nil
}

func (s *AuthorService) DeleteAuthor(ctx context.Context, id string) (string, error) {
	return s.repository.DeleteAuthor(ctx, id)
}

func (s *AuthorService) UpdateAuthor(ctx context.Context, id string, author *domain.Author) (string, error) {
	return s.repository.UpdateAuthor(ctx, id, author)
}
