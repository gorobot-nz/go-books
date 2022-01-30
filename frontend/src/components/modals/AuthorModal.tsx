import React, {FC, useEffect, useState} from 'react';
import {Form, Input, Modal} from "antd";
import {IAuthorWithBooks} from "../../models/IAuthorWithBooks";
import {useActions} from "../../hooks/useActions";

interface AuthorModalProps {
    author: IAuthorWithBooks
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    isUpdate: boolean;
}

const AuthorModal: FC<AuthorModalProps> = ({author, isModalVisible, setIsModalVisible, isUpdate}) => {
    const [authorInput, setAuthorInput] = useState(author)
    const {updateAuthor, addAuthor} = useActions()

    useEffect(() => {
        setAuthorInput(author)
    }, [author])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setAuthorInput(prevState => ({...prevState, [name]: value}))
    }

    const handleOk = () => {
        const sendAuthor = {} as IAuthorWithBooks
        sendAuthor.author.name = authorInput.author.name
        sendAuthor.author.surname = authorInput.author.surname
        if (isUpdate) {
            updateAuthor(authorInput)
        } else {
            addAuthor(authorInput)
        }
        setIsModalVisible(false)
        setAuthorInput({} as IAuthorWithBooks)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
        setAuthorInput({} as IAuthorWithBooks)
    }

    return (
        <Modal title="Author" visible={isModalVisible} onOk={handleOk}
               onCancel={handleCancel}>
            <Form>
                <Form.Item label="Title">
                    <Input
                        value={authorInput?.author?.name}
                        name='author.name'
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item label="Description">
                    <Input
                        value={authorInput?.author?.surname}
                        name='author.surname'
                        onChange={handleChange}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AuthorModal;