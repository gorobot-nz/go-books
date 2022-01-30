package service

import (
	"github.com/gorobot-nz/go-books/internal/domain"
	"github.com/stripe/stripe-go/v72"
	"github.com/stripe/stripe-go/v72/checkout/session"
	"github.com/stripe/stripe-go/v72/customer"
)

type StripeService struct{}

func NewStripeService() *StripeService {
	return &StripeService{}
}

var PriceId = "price_1KNjRLD5oBk3DmS9n1oYMXp8"

func (s *StripeService) CreateSession(data *domain.StripeInput) (*stripe.CheckoutSession, error) {

	customerParams := &stripe.CustomerParams{
		Email: stripe.String("test@gmail.com"),
	}
	customerParams.AddMetadata("FinalEmail", "test@gmail.com")
	newCustomer, err := customer.New(customerParams)

	if err != nil {
		return nil, err
	}

	meta := map[string]string{
		"FinalEmail": "test@gmail.com",
	}

	params := &stripe.CheckoutSessionParams{
		Customer:   &newCustomer.ID,
		SuccessURL: stripe.String("https://www.youtube.com/channel/UCzgn3FvGR1UK_0M0B6GiLug"),
		CancelURL:  stripe.String("https://www.youtube.com/channel/UCzgn3FvGR1UK_0M0B6GiLug"),
		PaymentMethodTypes: stripe.StringSlice([]string{
			"card",
		}),
		Mode: stripe.String(string(stripe.CheckoutSessionModeSubscription)),
		LineItems: []*stripe.CheckoutSessionLineItemParams{
			&stripe.CheckoutSessionLineItemParams{
				Price:    stripe.String(PriceId),
				Quantity: stripe.Int64(1),
			},
		},
		SubscriptionData: &stripe.CheckoutSessionSubscriptionDataParams{
			TrialPeriodDays: stripe.Int64(7),
			Metadata:        meta,
		},
	}

	return session.New(params)
}
