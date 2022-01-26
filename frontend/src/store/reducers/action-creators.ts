import {AuthActionCreators} from "./auth/action-creators";
import {AuthorActionCreators} from "./author/action-creators";
import {BookActionCreators} from "./book/action-creators";
import {CartActionCreators} from "./cart/action-creators";

export const actionCreators = {
    ...AuthActionCreators,
    ...AuthorActionCreators,
    ...BookActionCreators,
    ...CartActionCreators
}