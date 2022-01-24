import {BookAction, BookActionsEnum, BookState} from "./types";
import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

const initialState: BookState = {
    books: [] as IBookWithAuthors[],
    selectedBook: {} as IBookWithAuthors
}

export default function bookReducer(state = initialState, action: BookAction): BookState {
    switch (action.type) {
        case BookActionsEnum.SET_BOOKS:
            return {...state, books: action.payload}
        case BookActionsEnum.SET_SELECTED_BOOK:
            return {...state, selectedBook: action.payload}
        default:
            return state
    }
}