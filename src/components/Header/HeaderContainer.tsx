import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUsersData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export class HeaderContainer extends React.Component< HeaderPropsType, {}> {

    componentDidMount() {
        this.props.getAuthUsersData()
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
    getAuthUsersData: () => void,
};

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType  => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export const NewHeaderContainer = connect (mapStateToProps, {getAuthUsersData}) (HeaderContainer)

