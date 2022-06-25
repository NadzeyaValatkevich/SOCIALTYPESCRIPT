import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
// import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPosts.Container";
import {ProfileUsersType} from "../Profile/ProfileContainer";


export type ProfileMiddlePropsType = {
    profile: ProfileUsersType | null,
    status: string,
    updateStatus: (status: string) => void
};

const Profile = (props: ProfileMiddlePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;