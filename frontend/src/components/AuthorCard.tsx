import React, {FC, useState} from 'react';
import {IAuthorWithBooks} from "../models/IAuthorWithBooks";
import {Button, Card, Col, Divider, Form, Input, Modal, Row, Space} from "antd";
import {useActions} from "../hooks/useActions";

interface AuthorCardProps {
    author: IAuthorWithBooks
}

const AuthorCard: FC<AuthorCardProps> = ({author}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const {updateAuthor, getAuthors, deleteAuthor} = useActions()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (id: number) => {
        updateAuthor(id, name, surname)
        getAuthors()
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const edit = (author: IAuthorWithBooks) => {
        showModal()
        setName(author.author.name)
        setSurname(author.author.surname)
    }

    const remove = (author: IAuthorWithBooks) => {
        deleteAuthor(author.author.id)
        showModal()
    }

    return (
        <Col md={8}>
            <Card key={author.author.id}>
                <p>{author.author.name}</p>
                <p>{author.author.surname}</p>
                <Divider/>
                <Row justify='end'>
                    <Space>
                        <Button onClick={() => edit(author)}>
                            Редактировать
                        </Button>
                    </Space>
                    <Space>
                        <Button onClick={() => remove(author)}>
                            Удалить
                        </Button>
                    </Space>
                </Row>
            </Card>
            <Modal title="Author" visible={isModalVisible} onOk={() => handleOk(author.author.id)}
                   onCancel={handleCancel}>
                <Form>
                    <Form.Item label="Title">
                        <Input
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </Col>
    );
};

export default AuthorCard;