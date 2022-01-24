import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import "./App.css"
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "./store/reducers/auth/action-creators";
import {IUser} from "./models/IUser";
import jwt_decode from "jwt-decode";
import {Token} from "./models/Token";
import {useNavigate} from "react-router-dom";
import {PrivateRoutes, PublicRoutes} from "./routes";
import NavBar from "./components/NavBar";

function App() {
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            let decodedData: Token;
            // @ts-ignore
            decodedData = jwt_decode<Token>(localStorage.getItem('token'));
            dispatcher(AuthActionCreators.setIsAuth(true))
            dispatcher(AuthActionCreators.setUser({
                id: decodedData.user_id,
                name: decodedData.user_name,
                surname: decodedData.user_surname,
                roleId: decodedData.user_role_id
            } as IUser))
            navigate(PrivateRoutes.BOOKS)
        } else {
            navigate(PublicRoutes.SIGNIN)
        }
    }, [])

    return (
        <Layout>
            <NavBar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

export default App;
