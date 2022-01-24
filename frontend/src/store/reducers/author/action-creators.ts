import {IAuthorWithBooks} from "../../../models/IAuthorWithBooks";
import {AuthorActionsEnum, SetAuthors, SetSelectedAuthor} from "./types";
import {AppDispatch} from "../../index";
import {$api} from "../../../http";

export const AuthorActionCreators = {
    setAuthors: (payload: IAuthorWithBooks[]): SetAuthors => ({
        type: AuthorActionsEnum.SET_AUTHORS,
        payload
    }),
    setSelectedAuthor: (payload: IAuthorWithBooks): SetSelectedAuthor => ({
        type: AuthorActionsEnum.SET_SELECTED_AUTHOR,
        payload
    }),
    getAuthors: () => async (dispatch: AppDispatch) => {
        try {
            const response = await $api.get<IAuthorWithBooks[]>('/author', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(AuthorActionCreators.setAuthors(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}