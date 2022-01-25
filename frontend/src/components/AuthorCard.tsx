import React, {FC} from 'react';
import {IAuthorWithBooks} from "../models/IAuthorWithBooks";
import {Card, Col} from "antd";

interface AuthorCardProps {
    author: IAuthorWithBooks
}

const AuthorCard: FC<AuthorCardProps> = ({author}) => {
    return (
        <Col md={8}>
            <Card key={author.author.id}>
                <p>{author.author.name}</p>
                <p>{author.author.surname}</p>
            </Card>
        </Col>
    );
};

export default AuthorCard;