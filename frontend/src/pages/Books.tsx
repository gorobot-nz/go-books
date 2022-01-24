import React from 'react';
import {Button, Col, Layout} from "antd";
import BooksList from "../components/BooksList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {BookActionCreators} from "../store/reducers/book/action-creators";


const Books = () => {
    const {books} = useTypedSelector(state => state.book)
    const {user, isAuth} = useTypedSelector(state => state.auth)

    const dispatch = useDispatch()

    const submit = () => {
        dispatch(BookActionCreators.getBooks())
        console.log(books)
        console.log(user)
        console.log(isAuth)
    }

    return (
        <Layout>
            <Col>
                <BooksList/>
            </Col>
            <Button onClick={() => submit()}>
                Click
            </Button>
        </Layout>
    );
};

export default Books;