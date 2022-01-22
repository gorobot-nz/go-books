import {IUser} from "../../../models/IUser";
import {AuthActionEnum, SetErrorAction, SetIsAuthAction, SetIsLoadingAction, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";


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
            const response = await axios.post("http://localhost:8000/auth/signup", {
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
            const response = await axios.post("http://localhost:8000/auth/signin", {
                username: username,
                password: password,
            })
            console.log(response)
            dispatch(AuthActionCreators.setIsAuth(true))
            dispatch(AuthActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(AuthActionCreators.setError("Sign in error"));
            dispatch(AuthActionCreators.setIsLoading(false));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setIsLoading(true))
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsLoading(false))
    }
}