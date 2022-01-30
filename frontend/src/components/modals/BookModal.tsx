import React, {useEffect, useState} from 'react';
import {useActions} from "../../hooks/useActions";
import {Form, Input, Modal} from "antd";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IBookWithAuthors} from "../../models/IBookWithAuthors";
import {IAuthor} from "../../models/IAuthor";
import {IBook} from "../../models/IBook";

const BookModal = () => {
    const {isBookModalVisible, selectedBook, isBookUpdated} = useTypedSelector(state => state.bookReducer)
    const [bookInput, setBookInput] = useState(selectedBook)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [year, setYear] = useState('')
    const [authors, setAuthors] = useState('')
    const {updateBook, addBook, setIsBookModalVisible, setSelectedBook} = useActions()

    useEffect(() => {
        setBookInput(selectedBook)
    }, [selectedBook])

    const handleOk = () => {
        const book = {book: {} as IBook, authors: [] as IAuthor[]} as IBookWithAuthors
        book.book.title = title
        book.book.description = description
        book.book.price = Number(price)
        book.book.date = year
        if (isBookUpdated) {
            updateBook(book)
        } else {
            const authorsIds = authors.split(',').map(function (item) {
                return parseInt(item, 10);
            });
            addBook(book, authorsIds)
        }
        setIsBookModalVisible(false)
        setSelectedBook({} as IBookWithAuthors)
    }

    const handleCancel = () => {
        setIsBookModalVisible(false)
        setSelectedBook({} as IBookWithAuthors)
    }

    return (
        <Modal title="Book" visible={isBookModalVisible} onOk={handleOk}
               onCancel={handleCancel}>
            <Form>
                <Form.Item label="Title">
                    <Input
                        value={selectedBook?.book?.title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Description">
                    <Input
                        value={selectedBook?.book?.description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Price">
                    <Input
                        value={selectedBook?.book?.price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Publishing year">
                    <Input
                        value={selectedBook?.book?.date}
                        onChange={e => setYear(e.target.value)}
                    />
                </Form.Item>
                {
                    !isBookUpdated
                        ?
                        <Form.Item label="Authors">
                            <Input
                                value={authors}
                                onChange={e => setAuthors(e.target.value)}
                            />
                        </Form.Item>
                        :
                        <>
                        </>
                }
            </Form>
        </Modal>
    );
};

export default BookModal;