import React from 'react';
import {Card} from "antd";
import {IBookWithAuthors} from "../models/IBookWithAuthors";
import AuthorCard from "./AuthorCard";

const BookCard = (book: IBookWithAuthors) => {
    return (
        <Card title={book.title} style={{width: 300}}>
            <p>{book.description}</p>
            <p>{book.price} $</p>
            <p>{book.date}</p>
            {book.authors.map(author =>
                <AuthorCard key={author.id} id={author.id} name={author.name} surname={author.surname}/>
            )}
        </Card>
    );
};

export default BookCard;