import {IUser} from "../../../models/IUser";
import {AuthActionEnum, SetIsAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {AppDispatch} from "../../index";


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
    signIn: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));

            dispatch(AuthActionCreators.setIsAuth(true));
        } catch (e) {
            dispatch(AuthActionCreators.setError("Sign in error"));
            dispatch(AuthActionCreators.setIsLoading(false));
        }
    }
}