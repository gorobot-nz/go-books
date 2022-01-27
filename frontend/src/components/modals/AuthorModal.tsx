import React, {FC, useEffect, useState} from 'react';
import {Form, Input, Modal} from "antd";
import {IAuthorWithBooks} from "../../models/IAuthorWithBooks";

interface AuthorModalProps {
    author: IAuthorWithBooks
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    isUpdate: boolean;
}

const AuthorModal: FC<AuthorModalProps> = ({author, isModalVisible, setIsModalVisible, isUpdate}) => {
    const [authorInput, setAuthorInput] = useState(author)

    useEffect(() => {
        setIsModalVisible(isModalVisible)
    }, [isModalVisible])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setAuthorInput(prevState => ({...prevState, [name]: value}))
    }

    const handleOk = (authorId: number) => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <Modal title="Author" visible={isModalVisible} onOk={() => handleOk(0)}
               onCancel={handleCancel}>
            <Form>
                <Form.Item label="Title">
                    <Input
                        value={authorInput?.author?.name}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item label="Description">
                    <Input
                        value={authorInput?.author?.surname}
                        onChange={handleChange}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AuthorModal;