import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Divider, Layout, Row, Space} from "antd";
import {PrivateRoutes, PublicRoutes} from "../routes";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const NavBar: FC = () => {
    const navigate = useNavigate()

    const {isAuth} = useTypedSelector(state => state.authReducer)

    const {logout} = useActions()

    const submit = () => {
        logout()
        navigate(PublicRoutes.SIGNIN)
    }

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
                            <Button onClick={() => {
                            }}>
                                Добавить книгу
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={() => {
                            }}>
                                Добавить автора
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={submit}>
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

        </Layout.Header>
    );
};

export default NavBar;