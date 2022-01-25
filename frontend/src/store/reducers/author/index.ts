import {AuthorAction, AuthorActionsEnum, AuthorState} from "./types";
import {IAuthorWithBooks} from "../../../models/IAuthorWithBooks";

const initialState: AuthorState = {
    authors: [] as IAuthorWithBooks[],
    selectedAuthor: {} as IAuthorWithBooks,
    error: '',
    isLoading: false
}

export default function authorReducer(state = initialState, action: AuthorAction): AuthorState {
    switch (action.type) {
        case AuthorActionsEnum.SET_AUTHORS:
            return {...state, authors: action.payload, isLoading: false}
        case AuthorActionsEnum.SET_SELECTED_AUTHOR:
            return {...state, selectedAuthor: action.payload, isLoading: false}
        case AuthorActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case AuthorActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}