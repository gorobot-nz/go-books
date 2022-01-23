import React from 'react';
import {Col, Row} from "antd";
import BookCard from "./BookCard";
import {useTypedSelector} from "../hooks/useTypedSelector";

const BooksList = () => {

    const {books} = useTypedSelector(state => state.book)

    return (
        <Row justify="center">
            {books.map(book =>
                <Col>
                    <BookCard
                        id={book.id}
                        title={book.title}
                        description={book.description}
                        price={book.price} authors={book.authors}
                        date={book.date}
                        key={book.id}/>
                </Col>
            )}
        </Row>
    );
};

export default BooksList;