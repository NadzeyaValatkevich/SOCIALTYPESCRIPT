import {ActionsType} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_NEW_POST = 'samurai-network/profile/ADD-NEW-POST';
const SET_USER_PROFILE = 'samurai-network/profile/SET-USER-PROFILE';
const SET_STATUS = 'samurai-network/profile/SET-STATUS';
const DELETE_POST = 'samurai-network/profile/DELETE_POST';

export type PostType = {
    id: number,
    message: string,
    likesCount: number
};

export type InitialStateType = typeof initialState;

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 20},
        {id: 2, message: "It's my first post", likesCount: 10}
    ] as Array<PostType>,
    profile: null,
    status: ''
};

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost: PostType = {id: 5, message: action.newPostText, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost],
                // newPostText: ''
            };
        };
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        };
        case SET_STATUS: {
            return {...state, status: action.status}
        };
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        };
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_NEW_POST,
        newPostText
    } as const
};

export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
};

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
};

export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const);

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
};

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
