import React, {FC} from 'react';
import {IBookWithAuthors} from "../models/IBookWithAuthors";
import {Card, Row} from "antd";

interface BooksListProps {
    books: IBookWithAuthors[]
}

const BooksList: FC<BooksListProps> = ({books}) => {
    return (
        <Row>
            {books.map(book =>
                <Card key={book.book.id} title={book.book.title}>
                    <p>{book.book.price}</p>
                    <p>{book.book.date}</p>
                    {
                        book.authors.map(author =>
                            <div key={author.id}>
                                {author.name}
                                {author.surname}
                            </div>
                        )
                    }
                </Card>
            )}
        </Row>
    );
};

export default BooksList;