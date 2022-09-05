import React from 'react'
import {UsersType} from "../../redux/users-Reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from './User'

export type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    // usersPage: InitialStateType,
    users: any,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<number>,
};

export const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}: UsersPropsType) => {

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            <div>
            {users.map((u: UsersType) => <User key={u.id}
                                               user={u}
                                               followingInProgress={props.followingInProgress}
                                               follow={props.follow}
                                               unfollow={props.unfollow}
            />)}
            </div>
        </div>
    )
}