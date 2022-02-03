import React from 'react';
import {Layout, Row} from "antd";
import SignInForm from "../components/forms/SignInForm";

const SignIn = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <SignInForm/>
            </Row>
        </Layout>
    );
};

export default SignIn;