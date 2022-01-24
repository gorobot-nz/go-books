import React from 'react';
import {IAuthor} from "../models/IAuthor";
import {Layout, Row} from "antd";

const AuthorCard = (author: IAuthor) => {
    return (
        <Layout>
            <Row>{author.surname + " " + author.name}</Row>
        </Layout>
    );
};

export default AuthorCard;