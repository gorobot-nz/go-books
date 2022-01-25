import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Col, Layout, Row} from "antd";
import BooksList from "../components/BooksList";

const Books: FC = () => {
    const {books} = useTypedSelector(state => state.bookReducer)

    const {getBooks} = useActions()

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <Layout>
            <Row>
                <Col md={24}>
                    <BooksList books={books}/>
                </Col>
            </Row>
        </Layout>
    );
};

export default Books;