import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

export interface BookState {
    books: IBookWithAuthors[];
    selectedBook: IBookWithAuthors;
}

export enum BookActionsEnum {
    SET_BOOKS = 'SET_BOOKS',
    SET_SELECTED_BOOK = 'SET_SELECTED_BOOK'
}

export interface SetBooks {
    type: BookActionsEnum.SET_BOOKS,
    payload: IBookWithAuthors[]
}

export interface SetSelectedBook {
    type: BookActionsEnum.SET_SELECTED_BOOK,
    payload: IBookWithAuthors
}

export type BookAction = SetBooks | SetSelectedBook