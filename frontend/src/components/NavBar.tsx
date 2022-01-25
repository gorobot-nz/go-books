import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Divider, Form, Input, Layout, Modal, Row, Space} from "antd";
import {PrivateRoutes, PublicRoutes} from "../routes";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const NavBar: FC = () => {
    const navigate = useNavigate()

    const {isAuth} = useTypedSelector(state => state.authReducer)

    const [isModalBookVisible, setIsModalBookVisible] = useState(false)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [year, setYear] = useState('')

    const showModalBook = () => {
        setIsModalBookVisible(true);
    };

    const handleOkBook = () => {
        setIsModalBookVisible(false);
    };

    const handleCancelBook = () => {
        setIsModalBookVisible(false);
    };

    //------------------------------------------------------------------------------------------------------------------
    const [isModalAuthorVisible, setIsModalAuthorVisible] = useState(false)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const showModalAuthor = () => {
        setIsModalAuthorVisible(true);
    };

    const handleOkAuthor = () => {
        setIsModalAuthorVisible(false);
    };

    const handleCancelAuthor = () => {
        setIsModalAuthorVisible(false);
    };

    const {logout} = useActions()

    return (
        <Layout.Header>
            {
                isAuth ?
                    <Row justify="center">
                        <Space>
                            <Button onClick={() => navigate(PrivateRoutes.BOOKS)}>
                                Книги
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={() => navigate(PrivateRoutes.AUTHORS)}>
                                Авторы
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={showModalBook}>
                                Добавить книгу
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={showModalAuthor}>
                                Добавить автора
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={logout}>
                                Logout
                            </Button>
                        </Space>
                    </Row>
                    :
                    <Row justify="center">
                        <Space>
                            <Button onClick={() => navigate(PublicRoutes.SIGNUP)}>
                                SignUp
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={() => navigate(PublicRoutes.SIGNIN)}>
                                SignIn
                            </Button>
                        </Space>
                    </Row>
            }
            <Modal title="Book" visible={isModalBookVisible} onOk={handleOkBook} onCancel={handleCancelBook}>
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
            <Modal title="Author" visible={isModalAuthorVisible} onOk={handleOkAuthor} onCancel={handleCancelAuthor}>
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
        </Layout.Header>
    );
};

export default NavBar;