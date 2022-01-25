import React, {FC, useState} from 'react';
import {Button, Card, Checkbox, Form, Input} from "antd";
import {useActions} from "../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {PrivateRoutes} from "../routes";

const SignInForm: FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    const {signIn} = useActions()
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = () => {
        signIn(username, password)
        navigate(PrivateRoutes.BOOKS)
    }


    return (
        <Card>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit" onClick={submit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default SignInForm;