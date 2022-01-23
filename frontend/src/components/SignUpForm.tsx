import React, {FC, useState} from 'react';
import {Button, Form, Input, Card} from "antd";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

const SignUpForm: FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const submit = () => {
        dispatch(AuthActionCreators.signUp(username, password, name, surname))
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

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{required: true, message: 'Please input your name!'}]}
                >
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Surname"
                    name="surname"
                    rules={[{required: true, message: 'Please input your surname!'}]}
                >
                    <Input
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit" onClick={() => submit()}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default SignUpForm;