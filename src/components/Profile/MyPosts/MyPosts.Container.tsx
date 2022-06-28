import {addPostActionCreator, PostType} from "../../../redux/profile-Reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostType>,
};

type MapDispatchPropsType = {
    addPost: (newPostText:string) => void

};

export type PostsPropsType = MapStatePropsType &  MapDispatchPropsType;

const mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
            // dispatch({type: 'UP-DATE-NEW-POST', newText: ''})
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

