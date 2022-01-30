import {CartAction, CartActionsEnum, CartState} from "./types";

const initialState: CartState = {
    cartWithBooks: new Map<number, number>(),
}

export default function cartReducer(state = initialState, action: CartAction): CartState {
    switch (action.type) {
        case CartActionsEnum.SET_CART_WITH_BOOKS:
            return {...state, cartWithBooks: action.payload}
        default:
            return state
    }
}