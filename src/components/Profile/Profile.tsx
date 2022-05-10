import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
// import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPosts.Container";
import {ProfileUsersType} from "../Profile/ProfileContainer";


export type ProfileMiddlePropsType = {
    profile: ProfileUsersType | null,
};

const Profile = (props: ProfileMiddlePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;