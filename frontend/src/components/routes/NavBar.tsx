import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Divider, Layout, Row, Space} from "antd";
import {PrivateRoutes, PublicRoutes} from "../../routes";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const NavBar: FC = () => {
    const navigate = useNavigate()
    const {isAuth} = useTypedSelector(state => state.authReducer)

    const {logout, setIsAuthorModalVisible, setIsBookModalVisible} = useActions()

    return (
        <Layout.Header>
            {
                isAuth ?
                    <Row justify="center">
                        <Space>
                            <Button onClick={() => navigate(PrivateRoutes.BOOKS)}>
                                Books
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={() => navigate(PrivateRoutes.AUTHORS)}>
                                Author
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={() => setIsBookModalVisible(true)}>
                                Add book
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={() => setIsAuthorModalVisible(true)}>
                                Add author
                            </Button>
                        </Space>
                        <Divider type="vertical"/>
                        <Space>
                            <Button onClick={() => navigate(PrivateRoutes.CART)}>
                                Cart
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
        </Layout.Header>
    );
};

export default NavBar;