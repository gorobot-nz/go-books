import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Divider, Layout, Row, Space} from "antd";
import {PrivateRoutes} from "../routes";
import {useActions} from "../hooks/useActions";

const NavBar: FC = () => {
    const navigate = useNavigate()

    const {logout} = useActions()

    return (
        <Layout.Header>
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
                    <Button onClick={() => navigate(PrivateRoutes.BOOKS)}>
                        UserInfo
                    </Button>
                </Space>
                <Divider type="vertical"/>
                <Space>
                    <Button onClick={() => navigate(PrivateRoutes.BOOKS)}>
                        Logout
                    </Button>
                </Space>
            </Row>
        </Layout.Header>
    );
};

export default NavBar;