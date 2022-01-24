import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Layout, Menu, Row} from "antd";
import {PrivateRoutes, PublicRoutes} from "../routes";
import {useActions} from "../hooks/useActions";

const NavBar: FC = () => {
    const navigate = useNavigate()

    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify="end">
                <Menu theme="dark" selectable={true}>
                    <Menu.Item
                        onClick={() => navigate(PrivateRoutes.BOOKS)}
                        key={1}
                    >
                        Книги
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => navigate(PrivateRoutes.AUTHORS)}
                        key={2}
                    >
                        Авторы
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => navigate(PublicRoutes.SIGNUP)}
                        key={3}
                    >
                        Sign Up
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => navigate(PublicRoutes.SIGNIN)}
                        key={4}
                    >
                        Sign In
                    </Menu.Item>
                    <Menu.Item
                        onClick={logout}
                        key={5}
                    >
                        Exit
                    </Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default NavBar;