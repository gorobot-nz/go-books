import {BookAction, BookActionsEnum, BookState} from "./types";
import {IBook} from "../../../models/IBook";
import {IBookWithAuthors} from "../../../models/IBookWithAuthors";

const initialState: BookState = {
    books: [
        {
            id: 1,
            title: "Monday starts at saturday",
            description: "Story about NIICHAVO",
            price: 150,
            date: '1960',
            authors: [
                {
                    id: 1,
                    name: "Arkadiy",
                    surname: "Strugatskii",
                },
                {
                    id: 2,
                    name: "Valery",
                    surname: "Strugatskii",
                }
            ]
        },
        {
            id: 2,
            title: "It's hard to be god",
            description: "Story about (i don't read it yet)",
            price: 200,
            date: '1958',
            authors: [
                {
                    id: 1,
                    name: "Arkadiy",
                    surname: "Strugatskii",
                },
                {
                    id: 2,
                    name: "Valery",
                    surname: "Strugatskii",
                }]
        },
        {
            id: 3,
            title: "Chain saw man",
            description: "Story about chain saw man and demons",
            price: 300,
            date: '2018',
            authors: [
                {
                    id: 3,
                    name: "Tatsuki",
                    surname: "Fudzimoto",
                }
            ]
        }
    ] as IBookWithAuthors[],
    selectedBook: {} as IBookWithAuthors,
    error: '',
    isLoading: false
}

export default function bookReducer(state = initialState, action: BookAction): BookState {
    switch (action.type) {
        case BookActionsEnum.SET_BOOKS:
            return {...state, books: action.payload, isLoading: false}
        case BookActionsEnum.SET_SELECTED_BOOK:
            return {...state, selectedBook: action.payload, isLoading: false}
        case BookActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        case BookActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}