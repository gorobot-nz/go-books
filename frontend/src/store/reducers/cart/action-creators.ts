import {ICart} from "../../../models/ICart";
import {CartActionsEnum, SetCartAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";

export const CartActionCreators = {
    setCart: (payload: ICart): SetCartAction => ({
        type: CartActionsEnum.SET_CART,
        payload
    }),
    setUser: (payload: IUser): SetUserAction => ({
        type: CartActionsEnum.SET_USER,
        payload
    }),
    buy: () => async (dispatch: AppDispatch) => ({

    })
}