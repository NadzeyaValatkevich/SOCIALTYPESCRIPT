import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType,
    addNewPost: (postMessage:string) => void,
    updateNewPost: (newText: string) => void
};

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addNewPost={props.addNewPost}
                     updateNewPost={props.updateNewPost}
            />
        </div>
    );
};

export default Profile;