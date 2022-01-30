export interface CartState {
    cartWithBooks: Map<number, number>;
}

export enum CartActionsEnum {
    SET_CART_WITH_BOOKS = 'SET_CART_WITH_BOOKS',
}

export interface SetCartWithBooksAction {
    type: CartActionsEnum.SET_CART_WITH_BOOKS;
    payload: Map<number, number>;
}

export type CartAction = SetCartWithBooksAction