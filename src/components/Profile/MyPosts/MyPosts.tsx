import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsType, addPostActionCreator, PostType, upDateNewPostActionCreator} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>,
    newPostText: string,
    dispatch: (action:ActionsType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText))
        props.dispatch(upDateNewPostActionCreator(''))
        // props.dispatch({type:'UP-DATE-NEW-POST', newText: ''})
    };

     const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
         props.dispatch(upDateNewPostActionCreator(e.currentTarget.value))
         // props.dispatch({type: "UP-DATE-NEW-POST", newText: e.currentTarget.value})
     }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                              onChange={newTextChangeHandler}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;