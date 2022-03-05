import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>,
    newPostText: string,
    addNewPost: (postMesssage: string) => void,
    updateNewPost: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    //
    // let newPostElementRef = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
            props.addNewPost(props.newPostText);
            props.updateNewPost('');
    };
     const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
         props.updateNewPost(e.currentTarget.value)
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