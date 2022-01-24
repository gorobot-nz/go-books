import React, {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Authors = () => {


    const {authors} = useTypedSelector(state => state.authorReducer)

    console.log(authors)
    const {getAuthors} = useActions()

    useEffect(() => {
        getAuthors()
    }, [])

    return (
        <div>

        </div>
    );
};

export default Authors;