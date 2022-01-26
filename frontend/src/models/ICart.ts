import {IBookWithAuthors} from "./IBookWithAuthors";

export interface ICart {
    id: number;
    books: IBookWithAuthors[];
}