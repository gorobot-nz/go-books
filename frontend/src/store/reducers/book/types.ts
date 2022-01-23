import {IBook} from "../../../models/IBook";

export interface BookState {
    books: IBook[];
    selectedBook: IBook[];
    isLoading: boolean;
    error: string;
}

export enum BookActionsEnum {
    SET_BOOKS = "SET_BOOKS",
    SET_SELECTED_BOOK = "SET_SELECTED_BOOK",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
}

export interface SetBooks {
    type: BookActionsEnum.SET_BOOKS;
    payload: IBook[];
}

export interface SetSelectedBook {
    type: BookActionsEnum.SET_SELECTED_BOOK;
    payload: IBook;
}

export interface SetIsLoading {
    type: BookActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetError {
    type: BookActionsEnum.SET_ERROR;
    payload: string;
}

export type BookAction =
    SetBooks |
    SetSelectedBook |
    SetError |
    SetIsLoading
