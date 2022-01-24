import {AuthorAction, AuthorActionsEnum, AuthorState} from "./types";
import {IAuthorWithBooks} from "../../../models/IAuthorWithBooks";

const initialState: AuthorState = {
    authors: [] as IAuthorWithBooks[],
    selectedAuthor: {} as IAuthorWithBooks
}

export default function authorReducer(state = initialState, action: AuthorAction): AuthorState {
    switch (action.type) {
        case AuthorActionsEnum.SET_AUTHORS:
            return {...state, authors: action.payload}
        case AuthorActionsEnum.SET_SELECTED_AUTHOR:
            return {...state, selectedAuthor: action.payload}
        default:
            return state
    }
}