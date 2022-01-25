import React, {FC, useState} from 'react';
import {IBookWithAuthors} from "../models/IBookWithAuthors";
import {Button, Card, Col, Divider, Input, Modal, Row, Select} from "antd";

interface BookCardProps {
    book: IBookWithAuthors
}

const BookCard: FC<BookCardProps> = ({book}) => {

    const {Option} = Select;

    const [isModalVisible, setIsModalVisible] = useState(false)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [year, setYear] = useState('')

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const edit = (book: IBookWithAuthors) => {
        showModal()
        setTitle(book.book.title)
        setDescription(book.book.description)
        setYear(book.book.date.slice(0, 4))
        setPrice(book.book.price)
    }

    const remove = (book: IBookWithAuthors) => {
        showModal()
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
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <Input
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <Input
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                />
                <Input
                    value={year}
                    onChange={e => setYear(e.target.value)}
                />
            </Modal>
        </Col>
    );
};

export default BookCard;