import {BookAction, BookActionsEnum, BookState} from "./types";
import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

const initialState: BookState = {
    books: [] as IBookWithAuthors[],
    selectedBook: {} as IBookWithAuthors,
    isLoading: false,
    isBookModalVisible: false,
    isBookUpdated: false,
    error: ''
}

export default function bookReducer(state = initialState, action: BookAction): BookState {
    switch (action.type) {
        case BookActionsEnum.SET_BOOKS:
            return {...state, books: action.payload, isLoading: false}
        case BookActionsEnum.SET_SELECTED_BOOK:
            return {...state, selectedBook: action.payload, isLoading: false}
        case BookActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case BookActionsEnum.SET_IS_BOOK_MODAL_VISIBLE:
            return {...state, isBookModalVisible: action.payload}
        case BookActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        case BookActionsEnum.SET_IS_BOOK_UPDATED:
            return {...state, isBookUpdated: action.payload}
        default:
            return state
    }
}