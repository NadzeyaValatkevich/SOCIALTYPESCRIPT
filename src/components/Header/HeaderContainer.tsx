import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export class HeaderContainer extends React.Component< HeaderPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
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

