import React from 'react';
// @ts-ignore
import s from './Post.module.css';

type PostPropsType = {
    message: string,
    likesCount: number
}
const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src={'https://cs13.pikabu.ru/avatars/658/x658267-1013849002.png'} alt={'ava'}/>
            {props.message}
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    );
};

export default Post;