import {IBook} from "./IBook";
import {IAuthor} from "./IAuthor";

export interface IAuthorWithBooks {
    author: IAuthor;
    books: IBook[];
}