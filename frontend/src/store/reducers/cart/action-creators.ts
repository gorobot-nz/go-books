import {CartActionsEnum, SetCartWithBooksAction} from "./types";
import {AppDispatch} from "../../index";

export const CartActionCreators = {
    setCart: (payload: Map<number, number>): SetCartWithBooksAction => ({
        type: CartActionsEnum.SET_CART_WITH_BOOKS,
        payload
    }),
    buy: () => async (dispatch: AppDispatch) => ({})
}