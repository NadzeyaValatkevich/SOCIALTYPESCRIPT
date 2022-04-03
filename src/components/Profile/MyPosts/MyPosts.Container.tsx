import React from 'react';
import {addPostActionCreator, upDateNewPostActionCreator} from "../../../redux/profile-Reducer";
import {StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

// type MyPostsContainerPropsType = {
//     store: StoreType,
// }

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store:StoreType) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator(store.getState().profilePage.newPostText))
                    store.dispatch({type: 'UP-DATE-NEW-POST', newText: ''})
                };

                const newTextChangeHandler = (text: string) => {
                    store.dispatch(upDateNewPostActionCreator(text))
                }
                return <MyPosts upDateNewPost={newTextChangeHandler}
                         addPost={addPost}
                         posts={store.getState().profilePage.posts}
                         newPostText={store.getState().profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;