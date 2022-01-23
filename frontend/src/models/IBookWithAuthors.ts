import {IAuthor} from "./IAuthor";

export interface IBookWithAuthors {
    id: number;
    title: string;
    description: string;
    price: number;
    date: string;
    authors: IAuthor[];
}