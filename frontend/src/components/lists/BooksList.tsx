import React, {FC, useState} from 'react';
import {IBookWithAuthors} from "../../models/IBookWithAuthors";
import {Row} from "antd";
import BookCard from "../cards/BookCard";
import BookModal from "../modals/BookModal";

interface BooksListProps {
    books: IBookWithAuthors[]
}

const BooksList: FC<BooksListProps> = ({books}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [book, setBook] = useState({} as IBookWithAuthors)

    return (
        <Row>
            {books?.map(book =>
                <BookCard key={book.book.id} book={book} setIsModalVisible={setIsModalVisible} setBook={setBook}/>
            )}
            <BookModal book={book} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}
                       isUpdate={true}/>
        </Row>
    );
};

export default BooksList;