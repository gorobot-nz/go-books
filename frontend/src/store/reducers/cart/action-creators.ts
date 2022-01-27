import {CartActionsEnum, SetCartWithBooksAction} from "./types";
import {AppDispatch} from "../../index";
import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

export const CartActionCreators = {
    setCart: (payload: Map<IBookWithAuthors, number>): SetCartWithBooksAction => ({
        type: CartActionsEnum.SET_CART_WITH_BOOKS,
        payload
    }),
    buy: () => async (dispatch: AppDispatch) => ({})
}