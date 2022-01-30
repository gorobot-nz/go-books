import React, {FC} from 'react';
import {IAuthorWithBooks} from "../../models/IAuthorWithBooks";
import {Button, Card, Col, Divider, Row, Space} from "antd";
import {useActions} from "../../hooks/useActions";

interface AuthorCardProps {
    author: IAuthorWithBooks
}

const AuthorCard: FC<AuthorCardProps> = ({author}) => {

    const {deleteAuthor, setIsAuthorModalVisible, setSelectedAuthor} = useActions()

    const handleEdit = () => {
        setIsAuthorModalVisible(true)
        setSelectedAuthor(author)
    }

    const handleDelete = (id: number) => {
        deleteAuthor(id)
    }

    return (
        <Col md={8}>
            <Card key={author.author.id} title={author.author.id}>
                <p>{author.author.name}</p>
                <p>{author.author.surname}</p>
                <Divider/>
                <Row justify='end'>
                    <Space>
                        <Button onClick={handleEdit}>
                            Редактировать
                        </Button>
                    </Space>
                    <Space>
                        <Button onClick={() => handleDelete(author.author.id)}>
                            Удалить
                        </Button>
                    </Space>
                </Row>
            </Card>
        </Col>
    );
};

export default AuthorCard;