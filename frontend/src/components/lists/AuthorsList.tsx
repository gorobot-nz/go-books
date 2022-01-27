import React, {FC, useState} from 'react';
import {IAuthorWithBooks} from "../../models/IAuthorWithBooks";
import {Row} from "antd";
import AuthorCard from "../cards/AuthorCard";
import AuthorModal from "../modals/AuthorModal";

interface AuthorsListProps {
    authors: IAuthorWithBooks[]
}

const AuthorsList: FC<AuthorsListProps> = ({authors}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [author, setAuthor] = useState({} as IAuthorWithBooks)

    return (
        <Row>
            {authors?.map(author =>
                <AuthorCard
                    key={author.author.id}
                    author={author}
                    setIsModalVisible={setIsModalVisible}
                    setAuthor={setAuthor}
                />
            )}
            <AuthorModal author={author} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}
                         isUpdate={true}/>
        </Row>
    );
};

export default AuthorsList;