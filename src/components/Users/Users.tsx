import React from 'react';
import axios from "axios";
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../assets/images/user_png.png"

export class Users extends React.Component<UsersPropsType, {}> {

    constructor(props:UsersPropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {this.props.usersPage.users.map((u, index) => <div key={index}>
                <span>
                    <div>
                    <img alt={'userPhoto'} src={u.photos.small != null ? u.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                        </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.follow(u.id)
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
}

