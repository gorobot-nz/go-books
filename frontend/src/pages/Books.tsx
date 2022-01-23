import React from 'react';
import {Layout, Row} from "antd";
import {useTypedSelector} from "../hooks/useTypedSelector";


const Books = () => {

    const {books} = useTypedSelector(state => state.book)

    console.log(books)

    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                BOOKS
            </Row>
        </Layout>
    );
};

export default Books;