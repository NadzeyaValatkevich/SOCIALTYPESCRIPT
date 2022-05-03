import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unfollow,
    UsersType
} from "../../redux/users-Reducer";

import {InitialStateType} from "../../redux/users-Reducer";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";



export class UsersAPIComponent extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersPage={this.props.usersPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
        </>
    }
}


type MapStatePropsType = {
    usersPage: InitialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
};
type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching:boolean) => void,
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// };

export const UsersContainer = connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching
    }
    )(UsersAPIComponent);