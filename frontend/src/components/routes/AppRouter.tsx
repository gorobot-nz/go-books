import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PrivateRoutes, PublicRoutes} from "../../routes";
import Books from "../../pages/Books";
import Authors from "../../pages/Authors";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Cart from "../../pages/Cart";

const AppRouter = () => {

    const {isAuth} = useTypedSelector(state => state.authReducer)

    return (
        <Routes>
            {isAuth ?
                <>
                    <Route path={PrivateRoutes.BOOKS} element={<Books/>}/>
                    <Route path={PrivateRoutes.AUTHORS} element={<Authors/>}/>
                    <Route path={PrivateRoutes.CART} element={<Cart/>}/>
                    <Route
                        path="*"
                        element={<Navigate to={PrivateRoutes.BOOKS}/>}
                    />
                </>
                :
                <>
                    <Route path={PublicRoutes.SIGNUP} element={<SignUp/>}/>
                    <Route path={PublicRoutes.SIGNIN} element={<SignIn/>}/>
                    <Route
                        path="*"
                        element={<Navigate to={PublicRoutes.SIGNIN}/>}
                    />
                </>
            }
        </Routes>
    );
};

export default AppRouter;