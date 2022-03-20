// import React from 'react';


import {ActionsType, PostType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case 'UP-DATE-NEW-POST':
            state.newPostText = action.newText;
            return state;
        case 'ADD-NEW-POST':
            const newPost: PostType = {id: 5, message: action.postMessage, likesCount: 0};
            state.posts.push(newPost);
            return state;
        default: return  state;
    }
};

export const addPostActionCreator = (postMessage: string) => {
    return {
        type: "ADD-NEW-POST",
        postMessage: postMessage
    } as const
}

export const upDateNewPostActionCreator = (newText: string) => {
    return {
        type: 'UP-DATE-NEW-POST',
        newText: newText
    } as const
}