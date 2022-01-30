import React, {FC, useEffect, useState} from 'react';
import {IBookWithAuthors} from "../../models/IBookWithAuthors";
import {useActions} from "../../hooks/useActions";
import {Form, Input, Modal} from "antd";

interface BookModalProps {
    book: IBookWithAuthors
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    isUpdate: boolean;
}

const BookModal: FC<BookModalProps> = ({book, isModalVisible, setIsModalVisible, isUpdate}) => {
    const [bookInput, setBookInput] = useState(book)
    const [authors, setAuthors] = useState('')
    const {updateBook, addBook} = useActions()

    useEffect(() => {
        setBookInput(book)
    }, [book])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setBookInput(prevState => ({...prevState, [name]: value}))
    }

    const handleOk = () => {
        if (isUpdate) {
            updateBook(bookInput)
        } else {
            addBook(bookInput, [])
        }
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <Modal title="Book" visible={isModalVisible} onOk={handleOk}
               onCancel={handleCancel}>
            <Form>
                <Form.Item label="Title">
                    <Input
                        value={bookInput?.book?.title}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item label="Description">
                    <Input
                        value={bookInput?.book?.description}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item label="Price">
                    <Input
                        value={bookInput?.book?.price}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item label="Publishing year">
                    <Input
                        value={bookInput?.book?.date}
                        onChange={handleChange}
                    />
                </Form.Item>
                {
                    !isUpdate
                        ?
                        <Form.Item label="Authors">
                            <Input
                                value={authors}
                                onChange={e => e.target.value}
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