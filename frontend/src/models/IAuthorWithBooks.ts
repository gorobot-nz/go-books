import {IBook} from "./IBook";

export interface IAuthorWithBooks {
    id: number;
    name: string;
    surname: string;
    books: IBook[];
}