import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress, getUsers
} from "../../redux/users-Reducer";

import {InitialStateType} from "../../redux/users-Reducer";
import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";



export class UsersAPIComponent extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                followingInProgress={this.props.followingInProgress}
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
    followingInProgress: Array<number>,
};
type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    toggleFollowingProgress: (isFetching:boolean, userId:number) => void,
    getUsers: (currentPage:number, pageSize: number) => void,
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
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
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers
    }
    )(UsersAPIComponent);