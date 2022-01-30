import React, {useState} from 'react';
import {Form, Input, Modal} from "antd";
import {IAuthorWithBooks} from "../../models/IAuthorWithBooks";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IAuthor} from "../../models/IAuthor";
import {IBook} from "../../models/IBook";

const AuthorModal = () => {
    const {isAuthorModalVisible, selectedAuthor, isAuthorUpdated} = useTypedSelector(state => state.authorReducer)
    const {updateAuthor, addAuthor, setIsAuthorModalVisible, setSelectedAuthor} = useActions()
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const handleOk = () => {
        const author = {author: {} as IAuthor, books: [] as IBook[]} as IAuthorWithBooks
        author.author.name = name
        author.author.surname = surname
        if (isAuthorUpdated) {
            updateAuthor(author)
        } else {
            addAuthor(author)
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
                        value={selectedAuthor?.author?.name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Description">
                    <Input
                        value={selectedAuthor?.author?.surname}
                        onChange={e => setSurname(e.target.value)}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AuthorModal;