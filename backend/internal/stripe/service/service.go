package service

import (
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/stripe/stripe-go/v72"
	"github.com/stripe/stripe-go/v72/paymentintent"
)

type StripeService struct{}

func NewStripeService() *StripeService {
	return &StripeService{}
}

func (s *StripeService) CreateIntent(data *domain.StripeInput) (*stripe.PaymentIntent, error) {

	params := &stripe.PaymentIntentParams{
		Amount:             stripe.Int64(int64(data.Price)),
		Currency:           stripe.String(string(stripe.CurrencyPLN)),
		PaymentMethodTypes: []*string{stripe.String("card")},
	}

	pi, _ := paymentintent.New(params)

	return pi, nil
}
