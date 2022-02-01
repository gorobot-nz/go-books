import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

export interface CartState {
    cartWithBooks: IBookWithAuthors[];
    clientSecret: string
}

export enum CartActionsEnum {
    SET_CART_WITH_BOOKS = 'SET_CART_WITH_BOOKS',
    SET_CLIENT_SECRET = 'SET_CLIENT_SECRET',
}

export interface SetCartWithBooksAction {
    type: CartActionsEnum.SET_CART_WITH_BOOKS;
    payload: IBookWithAuthors[];
}

export interface SetClientSecretAction {
    type: CartActionsEnum.SET_CLIENT_SECRET;
    payload: string;
}

export type CartAction = SetCartWithBooksAction | SetClientSecretAction