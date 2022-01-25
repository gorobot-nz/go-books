import {IAuthorWithBooks} from "../../../models/IAuthorWithBooks";
import {
    AuthorActionsEnum,
    SetAuthorsAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetSelectedAuthorAction
} from "./types";
import {AppDispatch} from "../../index";
import {$api} from "../../../http";
import {GetAuthorResponse} from "../../../http/response/GetAuthorResponse";

export const AuthorActionCreators = {
    setAuthors: (payload: IAuthorWithBooks[]): SetAuthorsAction => ({
        type: AuthorActionsEnum.SET_AUTHORS,
        payload
    }),
    setSelectedAuthor: (payload: IAuthorWithBooks): SetSelectedAuthorAction => ({
        type: AuthorActionsEnum.SET_SELECTED_AUTHOR,
        payload
    }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: AuthorActionsEnum.SET_IS_LOADING,
        payload
    }),
    setError: (payload: string): SetErrorAction => ({
        type: AuthorActionsEnum.SET_ERROR,
        payload
    }),
    getAuthors: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthorActionCreators.setIsLoading(true))
            const {data} = await $api.get<GetAuthorResponse>('/author')
            dispatch(AuthorActionCreators.setAuthors(data.authors))
            dispatch(AuthorActionCreators.setError(''))
            dispatch(AuthorActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(AuthorActionCreators.setError('Get Authors error'))
            dispatch(AuthorActionCreators.setIsLoading(false))
        }
    },
    postAuthor: (name: string, surname: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthorActionCreators.setIsLoading(true))
            const {data} = await $api.post<string>('/author', {
                name: name,
                surname: surname
            })
            console.log(data)
            dispatch(AuthorActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(AuthorActionCreators.setError('Get Authors error'))
            dispatch(AuthorActionCreators.setIsLoading(false))
        }
    },
    updateAuthor: (id: number, name: string, surname: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthorActionCreators.setIsLoading(true))
            const {data} = await $api.put<string>(`/author/${id}`, {
                name: name,
                surname: surname
            })
            console.log(data)
            dispatch(AuthorActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(AuthorActionCreators.setError('Get Authors error'))
            dispatch(AuthorActionCreators.setIsLoading(false))
        }
    },
    deleteAuthor: (id: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthorActionCreators.setIsLoading(true))
            const {data} = await $api.delete<string>(`/author/${id}`)
            console.log(data)
            dispatch(AuthorActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(AuthorActionCreators.setError('Get Authors error'))
            dispatch(AuthorActionCreators.setIsLoading(false))
        }
    }
}