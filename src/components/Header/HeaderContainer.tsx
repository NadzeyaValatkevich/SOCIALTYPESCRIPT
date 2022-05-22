import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {loginAPI} from "../../api/api";

export class HeaderContainer extends React.Component< HeaderPropsType, {}> {
    componentDidMount() {
        loginAPI.getLoginUser()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            })
    };
    render() {
        return <Header
            {...this.props}
        />
    }
};

type MapStateToPropsType = {
    isAuth: boolean,
    login: null | string,
};

type MapDispatchToPropsType = {
    setAuthUserData: (id: null | string, email: null | string, login: null | string) => void,
};

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType  => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export const NewHeaderContainer = connect (mapStateToProps, {setAuthUserData}) (HeaderContainer)

