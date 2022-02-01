import React from 'react';
import {Col, Layout, Row} from "antd";
import CartList from "../components/lists/CartList";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import {useActions} from "../hooks/useActions";

const stripePromise = loadStripe('pk_test_51KM8UWD5oBk3DmS9OTO6TRwyDHetko1QtTh32u83kmV35nCCpdjsIOfJQZxpwSvPhGY7YOJZHWlPVOStk1SubBn5004A8x6HT8');


const Cart = () => {
    return (
        <Layout>
            <Row>
                <Col md={24}>
                    <Elements stripe={stripePromise}>
                        <CartList/>
                    </Elements>
                </Col>
            </Row>
        </Layout>
    );
};

export default Cart;