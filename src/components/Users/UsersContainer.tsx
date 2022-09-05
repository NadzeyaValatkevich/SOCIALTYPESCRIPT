import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,UsersType, requestUsers
} from "../../redux/users-Reducer";
import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors'

export class UsersAPIComponent extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    };

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, pageSize)
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users = {this.props.users}
                // usersPage={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
};

type MapStatePropsType = {
    users: UsersType[],
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
    requestUsers: (currentPage:number, pageSize: number) => void,
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            follow, unfollow, setCurrentPage,
            toggleFollowingProgress, requestUsers
        }
    )
)
(UsersAPIComponent);