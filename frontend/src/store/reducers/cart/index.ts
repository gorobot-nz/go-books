import {CartAction, CartActionsEnum, CartState} from "./types";
import {ICart} from "../../../models/ICart";
import {IUser} from "../../../models/IUser";

const initialState: CartState = {
    cart: {} as ICart,
    cartUser: {} as IUser
}

export default function cartReducer(state = initialState, action: CartAction): CartState {
    switch (action.type) {
        case CartActionsEnum.SET_CART:
            return {...state, cart: action.payload}
        case CartActionsEnum.SET_USER:
            return {...state, cartUser: action.payload}
        default:
            return state
    }
}