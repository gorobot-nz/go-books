import {IUser} from "../../../models/IUser";
import {AuthActionEnum, SetErrorAction, SetIsAuthAction, SetIsLoadingAction, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import {$auth} from "../../../http"
import {SignUpResponse} from "../../../http/response/SignUpResponse";
import {SignInResponse} from "../../../http/response/SignInResponse";


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({
        type: AuthActionEnum.SET_USER,
        payload: user
    }),
    setIsAuth: (isAuth: boolean): SetIsAuthAction => ({
        type: AuthActionEnum.SET_IS_AUTH,
        payload: isAuth
    }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: AuthActionEnum.SET_IS_LOADING,
        payload: isLoading
    }),
    setError: (error: string): SetErrorAction => ({
        type: AuthActionEnum.SET_ERROR,
        payload: error
    }),
    signUp: (username: string, password: string, name: string, surname: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const response = await $auth.post<SignUpResponse>("/signup", {
                username: username,
                password: password,
                name: name,
                surname: surname
            })
            console.log(response)
            dispatch(AuthActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(AuthActionCreators.setError("Sign in error"));
            dispatch(AuthActionCreators.setIsLoading(false));
        }
    },
    signIn: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const response = await $auth.post<SignInResponse>("/signin", {
                username: username,
                password: password,
            })
            localStorage.setItem('token', response.data.token)
            console.log(response)
            dispatch(AuthActionCreators.setIsAuth(true))
            dispatch(AuthActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(AuthActionCreators.setError("Sign in error"));
            dispatch(AuthActionCreators.setIsLoading(false));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            dispatch(AuthActionCreators.setIsAuth(false))
            localStorage.removeItem('token')
            dispatch(AuthActionCreators.setUser({} as IUser))
            dispatch(AuthActionCreators.setIsLoading(false))
        } catch (e) {
            console.log('some error')
        }
    }
}