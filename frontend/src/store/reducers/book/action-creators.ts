import {IBook} from "../../../models/IBook";
import {BookActionsEnum, SetBooksAction, SetErrorAction, SetIsLoadingAction, SetSelectedBookAction} from "./types";

export const BookActionCreators = {
    setBooks: (books: IBook[]): SetBooksAction => ({
        type: BookActionsEnum.SET_BOOKS,
        payload: books
    }),
    setSelectedBook: (book: IBook): SetSelectedBookAction => ({
        type: BookActionsEnum.SET_SELECTED_BOOK,
        payload: book
    }),
    setError: (error: string): SetErrorAction => ({
        type: BookActionsEnum.SET_ERROR,
        payload: error
    }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: BookActionsEnum.SET_IS_LOADING,
        payload: isLoading
    }),
}