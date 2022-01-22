import {IBook} from "./IBook";

export interface IAuthor {
    id: number;
    name: string;
    surname: string;
    books: IBook[];
}