import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
// import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPosts.Container";


export type ProfileMiddlePropsType = {
    profile: any
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