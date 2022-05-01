
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC,
    UsersType
} from "../../redux/users-Reducer";
import {Dispatch} from "redux";
import {InitialStateType} from "../../redux/users-Reducer";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

export class UsersAPIComponent extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    };

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            usersPage={this.props.usersPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}


type MapStatePropsType = {
    usersPage: InitialStateType,
    pageSize:number,
    totalUsersCount: number,
    currentPage: number,
};
type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void,
    setCurrentPage:(pageNumber:number) => void,
    setTotalUsersCount: (totalCount:number) => void,
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount:number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
};

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(UsersAPIComponent);