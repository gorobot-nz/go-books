import {IAuthorWithBooks} from "../../../models/IAuthorWithBooks";

export interface AuthorState {
    authors: IAuthorWithBooks[];
    selectedAuthor: IAuthorWithBooks;
}

export enum AuthorActionsEnum {
    SET_AUTHORS = 'SET_AUTHORS',
    SET_SELECTED_AUTHOR = 'SET_SELECTED_AUTHOR'
}

export interface SetAuthors {
    type: AuthorActionsEnum.SET_AUTHORS,
    payload: IAuthorWithBooks[]
}

export interface SetSelectedAuthor {
    type: AuthorActionsEnum.SET_SELECTED_AUTHOR,
    payload: IAuthorWithBooks
}

export type AuthorAction = SetAuthors | SetSelectedAuthor