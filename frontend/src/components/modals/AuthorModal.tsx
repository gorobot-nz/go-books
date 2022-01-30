import React, {useEffect, useState} from 'react';
import {Form, Input, Modal} from "antd";
import {IAuthorWithBooks} from "../../models/IAuthorWithBooks";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const AuthorModal = () => {
    const {isAuthorModalVisible, selectedAuthor, isAuthorUpdated} = useTypedSelector(state => state.authorReducer)
    const [authorInput, setAuthorInput] = useState(selectedAuthor)
    const {updateAuthor, addAuthor, setIsAuthorModalVisible, setSelectedAuthor} = useActions()

    useEffect(() => {
        setAuthorInput(selectedAuthor)
    }, [selectedAuthor])

    const handleOk = () => {
        if (isAuthorUpdated) {
            updateAuthor(authorInput)
        } else {
            addAuthor(authorInput)
        }
        setIsAuthorModalVisible(false)
        setSelectedAuthor({} as IAuthorWithBooks)
    }

    const handleCancel = () => {
        setIsAuthorModalVisible(false)
        setSelectedAuthor({} as IAuthorWithBooks)
    }

    return (
        <Modal title="Author" visible={isAuthorModalVisible} onOk={handleOk}
               onCancel={handleCancel}>
            <Form>
                <Form.Item label="Title">
                    <Input
                        value={authorInput?.author?.name}
                        onChange={e => e.target.value}
                    />
                </Form.Item>
                <Form.Item label="Description">
                    <Input
                        value={authorInput?.author?.surname}
                        onChange={e => e.target.value}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AuthorModal;