import React, {FC, useState} from 'react';
import {IBookWithAuthors} from "../models/IBookWithAuthors";
import {Button, Card, Col, Divider, Form, Input, Modal, Row, Select, Space} from "antd";
import {useActions} from "../hooks/useActions";

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

    const {updateBook, deleteBook} = useActions()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (id: number) => {
        updateBook(id, title, description, year, price)
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

    const remove = (id: number) => {
        deleteBook(id)
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
                    {book.authors?.map(author =>
                        <Option key={author.id} value={author.name}>
                            {author.name} {author.surname}
                        </Option>
                    )}
                </Select>
                <Divider/>
                <Row justify='end'>
                    <Space>
                        <Button onClick={() => edit(book)}>
                            Редактировать
                        </Button>
                    </Space>
                    <Space>
                        <Button onClick={() => remove(book.book.id)}>
                            Удалить
                        </Button>
                    </Space>
                </Row>
            </Card>
            <Modal title="Book" visible={isModalVisible} onOk={() => handleOk(book.book.id)}
                   onCancel={handleCancel}>
                <Form>
                    <Form.Item label="Title">
                        <Input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Price">
                        <Input
                            value={price}
                            onChange={e => setPrice(Number(e.target.value))}
                        />
                    </Form.Item>
                    <Form.Item label="Publishing year">
                        <Input
                            value={year}
                            onChange={e => setYear(e.target.value)}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </Col>
    );
};

export default BookCard;