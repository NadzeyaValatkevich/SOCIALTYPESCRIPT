import {addPostActionCreator, PostType, upDateNewPostActionCreator} from "../../../redux/profile-Reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType, store} from "../../../redux/redux-store";
import {Dispatch} from "redux";

// type MyPostsContainerPropsType = {
//     store: StoreType,
// }

// export const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store:StoreType) => {
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator(store.getState().profilePage.newPostText))
//                     store.dispatch({type: 'UP-DATE-NEW-POST', newText: ''})
//                 };
//
//                 const newTextChangeHandler = (text: string) => {
//                     store.dispatch(upDateNewPostActionCreator(text))
//                 }
//                 return <MyPosts upDateNewPost={newTextChangeHandler}
//                          addPost={addPost}
//                          posts={store.getState().profilePage.posts}
//                          newPostText={store.getState().profilePage.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     );
// };
type MapStatePropsType = {
    posts: Array<PostType>,
    newPostText: string
};

type MapDispatchPropsType = {
    upDateNewPost: (text:string) => void,
    addPost: () => void

};

export type PostsPropsType = MapStatePropsType &  MapDispatchPropsType;

const mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        upDateNewPost: (text:string) => {
            dispatch(upDateNewPostActionCreator(text))
        },

        addPost: () => {
            dispatch(addPostActionCreator(store.getState().profilePage.newPostText))
            // dispatch({type: 'UP-DATE-NEW-POST', newText: ''})
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

