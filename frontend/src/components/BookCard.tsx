import React, {FC} from 'react';
import {IBookWithAuthors} from "../models/IBookWithAuthors";
import {Card} from "antd";

interface BookCardProps {
    book: IBookWithAuthors
}

const BookCard: FC<BookCardProps> = ({book}) => {
    return (
        <Card key={book.id} title={book.title}/>
    );
};

export default BookCard;