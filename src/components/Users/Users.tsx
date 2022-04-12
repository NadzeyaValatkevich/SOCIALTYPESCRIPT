import React from 'react';
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {

if(props.usersPage.users.length === 0) {
    props.setUsers([
        {id: 1, photoUrl: 'https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/12571_800x480.jpg', fullName: 'Nadzeya', status: 'I like to read', followed: false,  location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/12571_800x480.jpg', fullName: 'Lyda', status: 'I like to cook',followed: true,  location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 3, photoUrl: 'https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/12571_800x480.jpg', fullName: 'Alesha', status: 'I like sport',followed: false,  location: {city: 'Moscow', country: 'Russia'}},
    ])}
    return (
        <div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img src = {u.photoUrl} className={styles.userPhoto}/>
                        </div>
                    <div>
                        { u.followed ?
                            <button onClick = {() => {props.unfollow(u.id)}}>Unfollow</button> :
                            <button onClick = {() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}