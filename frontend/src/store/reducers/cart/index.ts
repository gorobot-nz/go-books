import {CartAction, CartActionsEnum, CartState} from "./types";
import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

const initialState: CartState = {
    cartWithBooks: [] as IBookWithAuthors[],
}

export default function cartReducer(state = initialState, action: CartAction): CartState {
    switch (action.type) {
        case CartActionsEnum.SET_CART_WITH_BOOKS:
            return {...state, cartWithBooks: action.payload}
        default:
            return state
    }
}