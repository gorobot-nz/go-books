import {BookActionsEnum, SetBooksAction, SetErrorAction, SetIsLoadingAction, SetSelectedBookAction} from "./types";
import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

export const BookActionCreators = {
    setBooks: (books: IBookWithAuthors[]): SetBooksAction => ({
        type: BookActionsEnum.SET_BOOKS,
        payload: books
    }),
    setSelectedBook: (book: IBookWithAuthors): SetSelectedBookAction => ({
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
    }),/*
    getBooks: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(BookActionCreators.setIsLoading(true))
            dispatch(BookActionCreators.setSelectedBook({} as IBook))

            const {data} = await $api.get('/book')
            console.log(data)

            dispatch(BookActionCreators.setIsLoading(false))
        } catch (e) {
            console.log(e)
            dispatch(BookActionCreators.setError('error'))
            dispatch(BookActionCreators.setIsLoading(false))
        }
    }*/
}