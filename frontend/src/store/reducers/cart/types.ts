import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

export interface CartState {
    cartWithBooks: IBookWithAuthors[];
}

export enum CartActionsEnum {
    SET_CART_WITH_BOOKS = 'SET_CART_WITH_BOOKS',
}

export interface SetCartWithBooksAction {
    type: CartActionsEnum.SET_CART_WITH_BOOKS;
    payload: IBookWithAuthors[];
}

export type CartAction = SetCartWithBooksAction