import React, {FC} from 'react';
import {IBookWithAuthors} from "../models/IBookWithAuthors";
import {Row} from "antd";
import BookCard from "./BookCard";

interface BooksListProps {
    books: IBookWithAuthors[]
}

const BooksList: FC<BooksListProps> = ({books}) => {
    return (
        <Row>
            {books.map(book =>
                <BookCard key={book.id} book={book}/>
            )}
        </Row>
    );
};

export default BooksList;