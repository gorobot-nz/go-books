import {IBookWithAuthors} from "../../../models/IBookWithAuthors";
import {
    BookActionsEnum,
    SetBooksAction,
    SetErrorAction,
    SetIsBookModalVisibleAction,
    SetIsLoadingAction,
    SetSelectedBookAction
} from "./types";
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
    setIsBookModalVisible: (payload: boolean): SetIsBookModalVisibleAction => ({
        type: BookActionsEnum.SET_IS_BOOK_MODAL_VISIBLE,
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
            const {data} = await $api.get<GetBooksResponse>('/book')
            dispatch(BookActionCreators.setBooks(data.books))
            dispatch(BookActionCreators.setError(''))
            dispatch(BookActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(BookActionCreators.setError('Get Books Error'))
            dispatch(BookActionCreators.setIsLoading(false))
        }
    },
    addBook: (book: IBookWithAuthors, authors: number[]) => async (dispatch: AppDispatch) => {
        try {
            dispatch(BookActionCreators.setIsLoading(true))
            const {data} = await $api.post<string>('/book', {
                book: {
                    title: book.book.title,
                    description: book.book.description,
                    price: book.book.price,
                    date: book.book.date,
                },
                authors: authors
            })
            console.log(data)
            dispatch(BookActionCreators.setError(''))
            dispatch(BookActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(BookActionCreators.setError('Get Books Error'))
            dispatch(BookActionCreators.setIsLoading(false))
        }
    },
    updateBook: (book: IBookWithAuthors) => async (dispatch: AppDispatch) => {
        try {
            dispatch(BookActionCreators.setIsLoading(true))
            const {data} = await $api.put<string>(`/book/${book.book.id}`, {
                title: book.book.title,
                description: book.book.description,
                price: book.book.price,
                date: book.book.date
            })
            console.log(data)
            dispatch(BookActionCreators.setError(''))
            dispatch(BookActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(BookActionCreators.setError('Get Books Error'))
            dispatch(BookActionCreators.setIsLoading(false))
        }
    },
    deleteBook: (id: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(BookActionCreators.setIsLoading(true))
            const {data} = await $api.delete<string>(`/book/${id}`)
            dispatch(BookActionCreators.setError(''))
            dispatch(BookActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(BookActionCreators.setError('Get Books Error'))
            dispatch(BookActionCreators.setIsLoading(false))
        }
    }
}