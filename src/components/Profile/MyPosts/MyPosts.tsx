import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsPropsType} from "./MyPosts.Container";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/valodators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";


const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);


    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

type FormPostType = {
    newPostText: string
};
const maxLength10 = maxLengthCreator(10);

const AddNewPostForm: React.FC<InjectedFormProps<FormPostType>> = (props: InjectedFormProps<FormPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'}
                       component={Textarea}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm<FormPostType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;