import {IAuthor} from "../../../models/IAuthor";

export interface AuthorState {
    authors: IAuthor[];
    selectedAuthor: IAuthor;
    isLoading: boolean;
    error: string;
}

export enum AuthorActionsEnum {
    SET_AUTHORS = "SET_AUTHORS",
    SET_SELECTED_AUTHOR = "SET_SELECTED_AUTHOR",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
}


export interface SetAuthorsAction {
    type: AuthorActionsEnum.SET_AUTHORS;
    payload: IAuthor[];
}

export interface SetSelectedAuthorAction {
    type: AuthorActionsEnum.SET_SELECTED_AUTHOR;
    payload: IAuthor;
}

export interface SetIsLoadingAction {
    type: AuthorActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetErrorAction {
    type: AuthorActionsEnum.SET_ERROR;
    payload: string;
}

export type AuthorAction =
    SetAuthorsAction |
    SetSelectedAuthorAction |
    SetErrorAction |
    SetIsLoadingAction
