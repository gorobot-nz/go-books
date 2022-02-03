
document.addEventListener('DOMContentLoaded', async () => {
    const stripe = Stripe('pk_test_51KM8UWD5oBk3DmS9OTO6TRwyDHetko1QtTh32u83kmV35nCCpdjsIOfJQZxpwSvPhGY7YOJZHWlPVOStk1SubBn5004A8x6HT8')

    let elements = stripe.elements();
    let cardElement = elements.create('card');

    cardElement.mount('#card-element')

    const form = document.querySelector('#payment-form')

    const moneyInput = document.querySelector('#money')


    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        console.log(moneyInput.value)

        const {id} = await fetch('http://localhost:8080/stripe/accept', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                'price': moneyInput.value,
            })
        }).then(r => r.json())

        console.log(id)

        addMessage('Payment created')

        const nameInput = document.querySelector('#name')
        const mailInput = document.querySelector('#mail')

        const {paymentIntent} = await stripe.confirmCardPayment(
            id,
            {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: nameInput.value,
                        email: mailInput.value,
                    },
                },
            }
        );

        addMessage(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);

    })
});

const addMessage = (message) => {
    const messageDiv = document.querySelector("#messages");
    messageDiv.style.display = 'block';
    messageDiv.innerHTML += '>' + message + '<br>';
    console.log('Stripe: ', message)
};