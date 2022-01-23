import React from 'react';
import {Button, Layout, Row} from "antd";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {BookActionCreators} from "../store/reducers/book/action-creators";


const Books = () => {

    const {books} = useTypedSelector(state => state.book)


    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                BOOKS
            </Row>
        </Layout>
    );
};

export default Books;