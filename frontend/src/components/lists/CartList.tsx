import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Button, Divider, Layout, Modal, Row} from "antd";
import CartItem from "../cards/CartItem";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";


const CartList = () => {
    const {cartWithBooks} = useTypedSelector(state => state.cartReducer)
    const {user} = useTypedSelector(state => state.authReducer)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const stripe = useStripe()
    const elements = useElements()

    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    useEffect(() => {

    }, [cartWithBooks])

    const handleSubmit = async () => {
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement('card')

        const response = await axios.post("http://localhost:8080/stripe/accept", {
            price: cartWithBooks.reduce((sum, current) => sum + current.book.price, 0) * 100
        });

        console.log(response.data.id)

        const billingDetails = {
            name: user.name,
        };

        const paymentMethodReq = await stripe.createPaymentMethod({
            type: "card",
            // @ts-ignore
            card: cardElement,
            billing_details: billingDetails
        });

        if (paymentMethodReq.error) {
            console.log('paymentMethodErr', paymentMethodReq.error)
            return;
        }

        const {error} = await stripe.confirmCardPayment(response.data.id, {
            payment_method: paymentMethodReq.paymentMethod.id
        });

        if (error) {
            console.log(error)
            return
        }
    }

    return (
        <Layout>
            <Row>
                {cartWithBooks?.map((item, index) =>
                    <CartItem key={item.book.id} book={item} index={index}/>
                )}
            </Row>
            <Row>
                <Button style={{width: '100%'}} onClick={() => setIsModalVisible(true)}>
                    ClickMe
                </Button>
            </Row>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>{cartWithBooks.reduce((sum, current) => sum + current.book.price, 0)}</p>
                <form>
                    <CardElement/>
                    <Divider type={'horizontal'}/>
                    <Button onClick={handleSubmit}>
                        Click
                    </Button>
                </form>
            </Modal>
        </Layout>
    );
};

export default CartList;