import {CartActionsEnum, SetCartWithBooksAction, SetClientSecretAction} from "./types";
import {AppDispatch} from "../../index";
import {IBookWithAuthors} from "../../../models/IBookWithAuthors";
import axios from "axios";
import {useActions} from "../../../hooks/useActions";

export const CartActionCreators = {
    setCart: (payload: IBookWithAuthors[]): SetCartWithBooksAction => ({
        type: CartActionsEnum.SET_CART_WITH_BOOKS,
        payload
    }),
    setClientSecret: (payload: string): SetClientSecretAction => ({
        type: CartActionsEnum.SET_CLIENT_SECRET,
        payload
    }),
    buy: () => async (dispatch: AppDispatch) => {
        const response = await axios.post('http://localhost:8080/stripe/accept', {
            price: 500
        })
        dispatch(CartActionCreators.setClientSecret(response.data.id))
    }
}