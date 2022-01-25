import {IBookWithAuthors} from "../../../models/IBookWithAuthors";
import {BookActionsEnum, SetBooksAction, SetErrorAction, SetIsLoadingAction, SetSelectedBookAction} from "./types";
import {AppDispatch} from "../../index";
import {$api} from "../../../http";
import {GetBooksResponse} from "../../../http/response/GetBooksResponse";

export const BookActionCreators = {
    setBooks: (payload: IBookWithAuthors[]): SetBooksAction => ({
        type: BookActionsEnum.SET_BOOKS,
        payload
    }),
    setSelectedBook: (payload: IBookWithAuthors): SetSelectedBookAction => ({
        type: BookActionsEnum.SET_SELECTED_BOOK,
        payload
    }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: BookActionsEnum.SET_IS_LOADING,
        payload
    }),
    setError: (payload: string): SetErrorAction => ({
        type: BookActionsEnum.SET_ERROR,
        payload
    }),
    getBooks: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(BookActionCreators.setIsLoading(true))
            const {data} = await $api.get<GetBooksResponse>('/book', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(BookActionCreators.setBooks(data.books))
            dispatch(BookActionCreators.setError(''))
            dispatch(BookActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(BookActionCreators.setError('Get Books Error'))
            dispatch(BookActionCreators.setIsLoading(false))
        }
    }
}