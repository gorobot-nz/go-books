import React from 'react';
import {Col, Layout, Row} from "antd";
import CartList from "../components/lists/CartList";

const Cart = () => {
    return (
        <Layout>
            <Row>
                <Col md={24}>
                    <CartList/>
                </Col>
            </Row>
        </Layout>
    );
};

export default Cart;