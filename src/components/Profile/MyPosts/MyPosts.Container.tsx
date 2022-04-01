import React from 'react';
import {addPostActionCreator, upDateNewPostActionCreator} from "../../../redux/profile-Reducer";
import { StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    store: StoreType,
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    const addPost = () => {
        props.store.dispatch(addPostActionCreator(props.store.getState().profilePage.newPostText))
        props.store.dispatch({type:'UP-DATE-NEW-POST', newText: ''})
    };

     const newTextChangeHandler = (text: string) => {
         props.store.dispatch(upDateNewPostActionCreator(text))
     }

    return (
        <MyPosts upDateNewPost={newTextChangeHandler} addPost={addPost} posts={props.store.getState().profilePage.posts} newPostText={props.store.getState().profilePage.newPostText}/>
    );
};

export default MyPostsContainer;