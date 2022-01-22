import React from 'react';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import "./App.css"

function App() {
    return (
        <Layout>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

export default App;
