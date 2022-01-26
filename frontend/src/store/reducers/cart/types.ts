import {ICart} from "../../../models/ICart";
import {IUser} from "../../../models/IUser";
import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

export interface CartState {
    cart: ICart;
    cartUser: IUser;
}

export enum CartActionsEnum {
    ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART',
    REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART',
    SET_USER = 'SET_USER'
}

export interface AddBookToCartAction {
    type: CartActionsEnum.ADD_BOOK_TO_CART;
    payload: IBookWithAuthors;
}

export interface RemoveBookFromCart {
    type: CartActionsEnum.REMOVE_BOOK_FROM_CART;
    payload: number;
}

export interface SetUserAction {
    type: CartActionsEnum.SET_USER;
    payload: IUser;
}

export type CartAction = AddBookToCartAction | RemoveBookFromCart | SetUserAction