import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Books = () => {

    const {books} = useTypedSelector(state => state.bookReducer)

    console.log(books)

    const {getBooks} = useActions()

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div>

        </div>
    );
};

export default Books;