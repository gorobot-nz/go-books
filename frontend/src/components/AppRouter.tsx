import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PrivateRoutes, PublicRoutes} from "../routes";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Books from "../pages/Books";
import Authors from "../pages/Authors";
import DetailBook from "../pages/DetailBook";
import DetailAuthor from "../pages/DetailAuthor";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth ?
            <Routes>
                <Route path={PrivateRoutes.BOOKS} element={<Books/>}/>
                <Route path={PrivateRoutes.AUTHORS} element={<Authors/>}/>
                <Route path={PrivateRoutes.DETAILBOOK} element={<DetailBook/>}/>
                <Route path={PrivateRoutes.DETAILAUTHOR} element={<DetailAuthor/>}/>
                <Route path="*" element={<Navigate to={PrivateRoutes.BOOKS}/>}/>
            </Routes>
            :
            <Routes>
                <Route path={PublicRoutes.SIGNUP} element={<SignUp/>}/>
                <Route path={PublicRoutes.SIGNIN} element={<SignIn/>}/>
                <Route path="*" element={<Navigate to={PublicRoutes.SIGNIN}/>}/>
            </Routes>
    );
};

export default AppRouter;