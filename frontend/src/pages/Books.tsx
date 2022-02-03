import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {LoadingOutlined} from '@ant-design/icons';
import {Col, Layout, Row, Spin} from "antd";
import BooksList from "../components/lists/BooksList";

const Books: FC = () => {
    const {books, isLoading} = useTypedSelector(state => state.bookReducer)

    const {getBooks} = useActions()

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <Layout>
            {isLoading ?
                <Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/>
                :
                <Row>
                    <Col md={24}>
                        <BooksList books={books}/>
                    </Col>
                </Row>
            }
        </Layout>
    );
};

export default Books;