import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Row} from "antd";
import CartItem from "../cards/CartItem";

const CartList = () => {
    const {cartWithBooks} = useTypedSelector(state => state.cartReducer)

    useEffect(() => {

    }, [cartWithBooks])

    return (
        <Row>
            {cartWithBooks?.map((item, index) =>
                <CartItem key={item.book.id} book={item} index={index}/>
            )}
        </Row>
    );
};

export default CartList;