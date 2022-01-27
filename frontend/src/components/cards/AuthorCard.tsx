import React, {FC} from 'react';
import {IAuthorWithBooks} from "../../models/IAuthorWithBooks";
import {Button, Card, Col, Divider, Row, Space} from "antd";

interface AuthorCardProps {
    author: IAuthorWithBooks
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    setAuthor: React.Dispatch<React.SetStateAction<IAuthorWithBooks>>
}

const AuthorCard: FC<AuthorCardProps> = ({author, setIsModalVisible, setAuthor}) => {

    const handleEdit = () => {
        setIsModalVisible(true)
        setAuthor(author)
    }

    return (
        <Col md={8}>
            <Card key={author?.author?.id} title={author?.author?.id}>
                <p>{author?.author?.name}</p>
                <p>{author?.author?.surname}</p>
                <Divider/>
                <Row justify='end'>
                    <Space>
                        <Button onClick={handleEdit}>
                            Редактировать
                        </Button>
                    </Space>
                    <Space>
                        <Button onClick={() => {
                        }}>
                            Удалить
                        </Button>
                    </Space>
                </Row>
            </Card>

        </Col>
    );
};

export default AuthorCard;