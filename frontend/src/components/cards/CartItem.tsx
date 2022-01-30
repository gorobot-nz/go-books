import React, {FC} from 'react';
import {IBookWithAuthors} from "../../models/IBookWithAuthors";
import {Button, Card, Col, Divider} from "antd";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

interface CartCardProps {
    book: IBookWithAuthors
    index: number
}

const CartItem: FC<CartCardProps> = ({book, index}) => {

    const {cartWithBooks} = useTypedSelector(state => state.cartReducer)
    const {setCart} = useActions()

    const handleRemove = () => {
        cartWithBooks.splice(index, 1)
        console.log(cartWithBooks)
        setCart(cartWithBooks)
    }


    return (
        <Col md={3}>
            <Card key={book.book.id}>
                {book.book.title} ||| {index}
                <Divider type={"vertical"}/>
                <Button onClick={handleRemove}>
                    Remove
                </Button>
            </Card>
        </Col>
    );
};

export default CartItem;