import React, {FC} from 'react';
import {IBookWithAuthors} from "../../models/IBookWithAuthors";
import {Button, Card, Col, Divider, Row, Select} from "antd";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface BookCardProps {
    book: IBookWithAuthors
}

const BookCard: FC<BookCardProps> = ({book}) => {

    const {Option} = Select;
    const {cartWithBooks} = useTypedSelector(state => state.cartReducer)
    const {deleteBook, setIsBookModalVisible, setSelectedBook, setCart} = useActions()

    const handleAddToCart = () => {
        cartWithBooks.set(book.book.id, 1)
        setCart(cartWithBooks)
        console.log(cartWithBooks)
    }

    const handleEdit = () => {
        setIsBookModalVisible(true);
        setSelectedBook(book)
    };

    const handleDelete = (id: number) => {
        deleteBook(id)
    };

    return (
        <Col md={6}>
            <Card key={book.book.id} title={book.book.title}>
                <p>Desc: {book.book.description}</p>
                <Divider/>
                <p>Price: {book.book.price} $</p>
                <Divider/>
                <p>Publish year: {book.book.date.slice(0, 4)}</p>
                <Divider/>
                <p>АВТОРЫ</p>
                <Select style={{width: 250}}>
                    {book.authors?.map(author =>
                        <Option key={author.id} value={author.name}>
                            {author.name} {author.surname}
                        </Option>
                    )}
                </Select>
                <Divider/>
                <Row>
                    <Col>
                        <Button onClick={handleAddToCart}>
                            Add to cart
                        </Button>
                    </Col>
                    <Divider type='vertical'/>
                    <Col>
                        <Button onClick={handleEdit}>
                            Edit
                        </Button>
                    </Col>
                    <Divider type='vertical'/>
                    <Col>
                        <Button onClick={() => handleDelete(book.book.id)}>
                            Delete
                        </Button>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default BookCard;