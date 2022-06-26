import React from 'react'
import {reduxForm, Field, InjectedFormProps} from "redux-form";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props:InjectedFormProps<FormDataType>) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'login'} component={'input'} name={'login'}/>
                </div>
                <div>
                    <Field placeholder={'password'} component={'input'}name={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={'input'} name={'rememberMe'}/><span>Remember me</span>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    };

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};