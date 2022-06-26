import React from 'react'
import {reduxForm, Field} from "redux-form";

export const LoginForm = (props: any) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'login'} component={'input'} name={'login'}/>
                </div>
                <div>
                    <Field placeholder={'password'} component={'input'}name={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={'input'} name={'remember me'}/><span>Remember me</span>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: any) => {
        console.log(formData)
    };

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};