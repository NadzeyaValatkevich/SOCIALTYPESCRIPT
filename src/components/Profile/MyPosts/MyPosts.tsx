import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsPropsType} from "./MyPosts.Container";


const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);


    let onAddPost = () => {
        props.addPost();
    };

     const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
         props.upDateNewPost(e.currentTarget.value)
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;