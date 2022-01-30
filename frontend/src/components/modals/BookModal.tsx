import React, {useEffect, useState} from 'react';
import {useActions} from "../../hooks/useActions";
import {Form, Input, Modal} from "antd";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IBookWithAuthors} from "../../models/IBookWithAuthors";

const BookModal = () => {
    const {isBookModalVisible, selectedBook, isBookUpdated} = useTypedSelector(state => state.bookReducer)
    const [bookInput, setBookInput] = useState(selectedBook)
    const [authors, setAuthors] = useState('')
    const {updateBook, addBook, setIsBookModalVisible, setSelectedBook} = useActions()

    useEffect(() => {
        setBookInput(selectedBook)
    }, [selectedBook])

    const handleOk = () => {
        if (isBookUpdated) {
            updateBook(bookInput)
        } else {
            const authorsIds = authors.split(',').map(function (item) {
                return parseInt(item, 10);
            });
            addBook(bookInput, authorsIds)
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
                        value={bookInput?.book?.title}
                        onChange={e => e.target.value}
                    />
                </Form.Item>
                <Form.Item label="Description">
                    <Input
                        value={bookInput?.book?.description}
                        onChange={e => e.target.value}
                    />
                </Form.Item>
                <Form.Item label="Price">
                    <Input
                        value={bookInput?.book?.price}
                        onChange={e => e.target.value}
                    />
                </Form.Item>
                <Form.Item label="Publishing year">
                    <Input
                        value={bookInput?.book?.date}
                        onChange={e => e.target.value}
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