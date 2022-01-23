import {BookAction, BookActionsEnum, BookState} from "./types";
import {IBook} from "../../../models/IBook";

const initialState: BookState = {
    books: [] as IBook[],
    selectedBook: {} as IBook,
    error: '',
    isLoading: false
}

export default function bookReducer(state = initialState, action: BookAction): BookState {
    switch (action.type) {
        case BookActionsEnum.SET_BOOKS:
            return {...state, books: action.payload, isLoading: false}
        case BookActionsEnum.SET_SELECTED_BOOK:
            return {...state, selectedBook: action.payload, isLoading: false}
        case BookActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        case BookActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}