import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Divider, Layout, Row, Space} from "antd";
import {PrivateRoutes, PublicRoutes} from "../../routes";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import AuthorModal from "../modals/AuthorModal";
import {IAuthorWithBooks} from "../../models/IAuthorWithBooks";
import BookModal from "../modals/BookModal";
import {IBookWithAuthors} from "../../models/IBookWithAuthors";

const NavBar: FC = () => {
    const navigate = useNavigate()
    const {isAuth} = useTypedSelector(state => state.authReducer)

    const [isModalBookVisible, setIsModalBookVisible] = useState(false)
    const [isModalAuthorVisible, setIsModalAuthorVisible] = useState(false)

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
                            <Button onClick={() => setIsModalBookVisible(true)}>
                                Добавить книгу
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={() => setIsModalAuthorVisible(true)}>
                                Добавить автора
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={() => navigate(PrivateRoutes.CART)}>
                                Корзина
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
            <BookModal
                book={{} as IBookWithAuthors}
                isModalVisible={isModalBookVisible}
                setIsModalVisible={setIsModalBookVisible}
                isUpdate={false}/>
            <AuthorModal
                author={{} as IAuthorWithBooks}
                isModalVisible={isModalAuthorVisible}
                setIsModalVisible={setIsModalAuthorVisible}
                isUpdate={false}
            />
        </Layout.Header>
    );
};

export default NavBar;