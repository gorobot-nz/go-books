import React from 'react';
import {Layout, Row} from "antd";
import SignUpForm from "../components/forms/SignUpForm";

const SignUp = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <SignUpForm/>
            </Row>
        </Layout>
    );
};

export default SignUp;