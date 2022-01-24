import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Card, Layout} from "antd";
import BooksList from "../components/BooksList";

const Books: FC = () => {
    const {books} = useTypedSelector(state => state.bookReducer)

    const {getBooks} = useActions()

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <Layout>
            <BooksList books={books}/>
        </Layout>
    );
};

export default Books;