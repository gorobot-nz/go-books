import {
    AuthorActionsEnum,
    SetAuthorsAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetSelectedAuthorAction
} from "./types";
import {IAuthorWithBooks} from "../../../models/IAuthorWithBooks";

export const AuthorActionCreators = {
    setAuthors: (authors: IAuthorWithBooks[]): SetAuthorsAction => ({
        type: AuthorActionsEnum.SET_AUTHORS,
        payload: authors
    }),
    setSelectedAuthor: (author: IAuthorWithBooks): SetSelectedAuthorAction => ({
        type: AuthorActionsEnum.SET_SELECTED_AUTHOR,
        payload: author
    }),
    setError: (error: string): SetErrorAction => ({
        type: AuthorActionsEnum.SET_ERROR,
        payload: error
    }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: AuthorActionsEnum.SET_IS_LOADING,
        payload: isLoading
    }),
}