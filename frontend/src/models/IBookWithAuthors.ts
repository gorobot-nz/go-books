import {IAuthor} from "./IAuthor";
import {IBook} from "./IBook";

export interface IBookWithAuthors {
    book: IBook;
    authors: IAuthor[];
}