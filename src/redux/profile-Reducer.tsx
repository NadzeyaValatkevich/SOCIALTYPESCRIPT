import {ActionsType} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

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
        case 'ADD-NEW-POST': {
            let newPost: PostType = {id: 5, message: action.newPostText, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost],
                // newPostText: ''
            };
        };
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        };
        case 'SET-STATUS': {
            return {...state, status: action.status}
        };
        default: return  state;
    }
};

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-NEW-POST",
        newPostText
    } as const
};

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
};

export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
};

export const getUserProfile = (userId:number) => (dispatch:Dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            //set-аем в reducer
            dispatch(setUserProfile(data));
        })
};

export const getStatus = (userId:number) => (dispatch:Dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            //set-аем в reducer
            dispatch(setStatus(data));
        })
};

export const updateStatus = (status:string) => (dispatch:Dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
           if(data.resultCode === 0) {
               dispatch(setStatus(status));
           }
        })
};
