import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user_png.png";
import {InitialStateType} from "../../redux/users-Reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    usersPage: InitialStateType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
};

export const Users = (props: UsersPropsType) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    ;

    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span className={props.currentPage === p ? styles.selectedPage : undefined}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }} key={index}>{p}</span>
                })}
            </div>
            {props.usersPage.users.map((u, index) => <div key={index}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt={'userPhoto'} src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>
                        </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}