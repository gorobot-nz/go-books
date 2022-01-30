import {IAuthorWithBooks} from "../../../models/IAuthorWithBooks";

export interface AuthorState {
    authors: IAuthorWithBooks[];
    selectedAuthor: IAuthorWithBooks;
    isAuthorModalVisible: boolean;
    isLoading: boolean;
    error: string;
}

export enum AuthorActionsEnum {
    SET_AUTHORS = 'SET_AUTHORS',
    SET_SELECTED_AUTHOR = 'SET_SELECTED_AUTHOR',
    SET_ERROR = 'SET_ERROR',
    SET_IS_AUTHOR_MODAL_VISIBLE = 'SET_IS_AUTHOR_MODAL_VISIBLE',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

export interface SetAuthorsAction {
    type: AuthorActionsEnum.SET_AUTHORS;
    payload: IAuthorWithBooks[]
}

export interface SetSelectedAuthorAction {
    type: AuthorActionsEnum.SET_SELECTED_AUTHOR;
    payload: IAuthorWithBooks
}

export interface SetIsAuthorModalVisibleAction {
    type: AuthorActionsEnum.SET_IS_AUTHOR_MODAL_VISIBLE;
    payload: boolean
}

export interface SetIsLoadingAction {
    type: AuthorActionsEnum.SET_IS_LOADING;
    payload: boolean
}

export interface SetErrorAction {
    type: AuthorActionsEnum.SET_ERROR;
    payload: string
}

export type AuthorAction =
    SetAuthorsAction
    | SetSelectedAuthorAction
    | SetIsLoadingAction
    | SetErrorAction
    | SetIsAuthorModalVisibleAction