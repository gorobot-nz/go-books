import React, {FC} from 'react';
import {IBookWithAuthors} from "../models/IBookWithAuthors";
import {Button, Card, Col, Divider, Row, Select} from "antd";

interface BookCardProps {
    book: IBookWithAuthors
}

const BookCard: FC<BookCardProps> = ({book}) => {

    const {Option} = Select;

    const edit = (book: IBookWithAuthors) => {
    }

    const remove = (book: IBookWithAuthors) => {

    }

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
                    {book.authors.map(author =>
                        <Option key={author.id} value={author.name}>
                            {author.name} {author.surname}
                        </Option>
                    )}
                </Select>
                <Divider/>
                <Row>
                    <Button onClick={() => edit(book)}>
                        Редактировать
                    </Button>
                    <Button onClick={() => remove(book)}>
                        Удалить
                    </Button>
                </Row>
            </Card>
        </Col>
    );
};

export default BookCard;