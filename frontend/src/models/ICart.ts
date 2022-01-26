import {IBookWithAuthors} from "./IBookWithAuthors";

export interface ICart {
    id: number;
    name: string;
    surname: string;
    books: IBookWithAuthors[];
}