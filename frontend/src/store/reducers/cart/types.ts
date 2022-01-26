import {ICart} from "../../../models/ICart";
import {IUser} from "../../../models/IUser";
import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

export interface CartState {
    cart: ICart;
    cartUser: IUser;
}

export enum CartActionsEnum {
    SET_CART = 'SET_CART',
    SET_USER = 'SET_USER'
}

export interface SetCartAction {
    type: CartActionsEnum.SET_CART;
    payload: ICart;
}

export interface SetUserAction {
    type: CartActionsEnum.SET_USER;
    payload: IUser;
}

export type CartAction = SetCartAction | SetUserAction