import {IBookWithAuthors} from "../../../models/IBookWithAuthors";
import {BookActionsEnum, SetBooks, SetSelectedBook} from "./types";
import {AppDispatch} from "../../index";
import {$api} from "../../../http";

export const BookActionCreators = {
    setBooks: (payload: IBookWithAuthors[]): SetBooks => ({
        type: BookActionsEnum.SET_BOOKS,
        payload
    }),
    setSelectedBook: (payload: IBookWithAuthors): SetSelectedBook => ({
        type: BookActionsEnum.SET_SELECTED_BOOK,
        payload
    }),
    getBooks: () => async (dispatch: AppDispatch) => {
        try {
            const response = await $api.get<IBookWithAuthors[]>('/book', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(BookActionCreators.setBooks(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}