import React, {FC} from 'react';
import {IBookWithAuthors} from "../models/IBookWithAuthors";
import {Card} from "antd";

interface BookCardProps {
    book: IBookWithAuthors
}

const BookCard: FC<BookCardProps> = ({book}) => {
    console.log("FROOOOOOOOOOOOOm card")
    console.log(book)
    return (
        <Card key={book.book.id} title={book.book.title}>
            <p>{book.book.price}</p>
        </Card>
    );
};

export default BookCard;