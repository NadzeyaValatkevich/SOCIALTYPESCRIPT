import React from 'react'
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../../components/common/FormsControl/FormsControl";
import {required} from "../../utils/valodators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import style from '../common/FormsControl/FormsControls.module.css'

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    error: string | null
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props:InjectedFormProps<FormDataType>) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'email'}
                           component={Input}
                           name={'email'}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field placeholder={'password'}
                           type={'password'}
                           component={Input}
                           name={'password'}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field type={'checkbox'}
                           component={Input}
                           name={'rememberMe'}
                           validate={[required]}
                    />
                    <span>Remember me</span>
                </div>
                {
                  props.error &&  <div className={style.formSummaryError}>{props.error}</div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
};
type mapStateToPropsType = {
    isAuth: boolean
};
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login)