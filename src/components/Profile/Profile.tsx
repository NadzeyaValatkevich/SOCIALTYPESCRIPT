import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType, StoreType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType,
    dispatch: (action:ActionsType) => void,
    store: StoreType
    // addNewPost: (postMessage:string) => void,
    // updateNewPost: (newText: string) => void
};

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch.bind(props.store)}
            />
        </div>
    );
};

export default Profile;