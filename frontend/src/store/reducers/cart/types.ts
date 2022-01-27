import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

export interface CartState {
    cartWithBooks: Map<IBookWithAuthors, number>;
}

export enum CartActionsEnum {
    SET_CART_WITH_BOOKS = 'SET_CART_WITH_BOOKS',
}

export interface SetCartWithBooksAction {
    type: CartActionsEnum.SET_CART_WITH_BOOKS;
    payload: Map<IBookWithAuthors, number>;
}

export type CartAction = SetCartWithBooksAction