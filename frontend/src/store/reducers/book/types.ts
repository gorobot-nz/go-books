import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

export interface BookState {
    books: IBookWithAuthors[];
    selectedBook: IBookWithAuthors;
    isLoading: boolean;
    error: string;
}

export enum BookActionsEnum {
    SET_BOOKS = "SET_BOOKS",
    SET_SELECTED_BOOK = "SET_SELECTED_BOOK",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
}

export interface SetBooksAction {
    type: BookActionsEnum.SET_BOOKS;
    payload: IBookWithAuthors[];
}

export interface SetSelectedBookAction {
    type: BookActionsEnum.SET_SELECTED_BOOK;
    payload: IBookWithAuthors;
}

export interface SetIsLoadingAction {
    type: BookActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetErrorAction {
    type: BookActionsEnum.SET_ERROR;
    payload: string;
}

export type BookAction =
    SetBooksAction |
    SetSelectedBookAction |
    SetErrorAction |
    SetIsLoadingAction
