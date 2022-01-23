import React from 'react';
import {Col, Layout, Row} from "antd";
import {useTypedSelector} from "../hooks/useTypedSelector";
import BookCard from "../components/BookCard";
import BooksList from "../components/BooksList";


const Books = () => {


    return (
        <Layout>
            <Col>
                <BooksList/>
            </Col>
        </Layout>
    );
};

export default Books;