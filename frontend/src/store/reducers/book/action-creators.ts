import {IBook} from "../../../models/IBook";
import {BookActionsEnum, SetBooksAction, SetErrorAction, SetIsLoadingAction, SetSelectedBookAction} from "./types";
import {AppDispatch} from "../../index";
import {$api} from "../../../http";
import {GetBooksResponse} from "../../../http/response/GetBooksResponse";

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
    getBooks: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(BookActionCreators.setIsLoading(true))
            dispatch(BookActionCreators.setSelectedBook({} as IBook))

            const {data} = await $api.get<GetBooksResponse>('/books')
            console.log(data.books)

            dispatch(BookActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(BookActionCreators.setError('error'))
            dispatch(BookActionCreators.setIsLoading(false))
        }
    }
}