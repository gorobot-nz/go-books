import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import "./App.css"
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "./store/reducers/auth/action-creators";

function App() {
    const dispatcher = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('token')){
            dispatcher(AuthActionCreators.setIsAuth(true))
        }
    }, [])

    return (
        <Layout>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

export default App;
