import React, {FC} from 'react';
import {IAuthorWithBooks} from "../../models/IAuthorWithBooks";
import {Row} from "antd";
import AuthorCard from "../cards/AuthorCard";
import AuthorModal from "../modals/AuthorModal";

interface AuthorsListProps {
    authors: IAuthorWithBooks[]
}

const AuthorsList: FC<AuthorsListProps> = ({authors}) => {
    return (
        <Row>
            {authors?.map(author =>
                <AuthorCard
                    key={author?.author?.id}
                    author={author}
                />
            )}
            <AuthorModal/>
        </Row>
    );
};

export default AuthorsList;