package domain

import "github.com/stripe/stripe-go/v72"

type StripeInput struct {
	Books  []int `json:"books"`
	UserId int   `json:"userId"`
	Price  int   `json:"price"`
}

type StripeService interface {
	CreateIntent(data *StripeInput) (*stripe.PaymentIntent, error)
}
