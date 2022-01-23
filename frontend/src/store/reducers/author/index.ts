import {AuthorAction, AuthorActionsEnum, AuthorState} from "./types";
import {IAuthor} from "../../../models/IAuthor";
import {IAuthorWithBooks} from "../../../models/IAuthorWithBooks";

const initialState: AuthorState = {
    authors: [
        {
            id: 1,
            name: "Arkadiy",
            surname: "Strugatskii",
            books: [
                {
                    id: 1,
                    title: "Monday starts at saturday",
                    description: "Story about NIICHAVO",
                    price: 150,
                    date: '1960',
                },
                {
                    id: 2,
                    title: "It's hard to be god",
                    description: "Story about (i don't read it yet)",
                    price: 200,
                    date: '1958',
                }
            ]
        },
        {
            id: 2,
            name: "Valery",
            surname: "Strugatskii",
            books: [
                {
                    id: 1,
                    title: "Monday starts at saturday",
                    description: "Story about NIICHAVO",
                    price: 150,
                    date: '1960',
                },
                {
                    id: 2,
                    title: "It's hard to be god",
                    description: "Story about (i don't read it yet)",
                    price: 200,
                    date: '1958',
                }]
        },
        {
            id: 3,
            name: "Tatsuki",
            surname: "Fudzimoto",
            books: [
                {
                    id: 3,
                    title: "Chain saw man",
                    description: "Story about chain saw man and demons",
                    price: 300,
                    date: '2018',
                }
            ]
        },
    ] as IAuthorWithBooks[],
    selectedAuthor: {} as IAuthorWithBooks,
    error: '',
    isLoading: false
}

export default function authorReducer(state = initialState, action: AuthorAction): AuthorState {
    switch (action.type) {
        case AuthorActionsEnum.SET_AUTHORS:
            return {...state, authors: action.payload, isLoading: false}
        case AuthorActionsEnum.SET_SELECTED_AUTHOR:
            return {...state, selectedAuthor: action.payload, isLoading: false}
        case AuthorActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case AuthorActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}