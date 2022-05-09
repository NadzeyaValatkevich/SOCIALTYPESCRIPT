import {ActionsType} from "./store";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
};

export type InitialStateType = typeof initialState

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 20},
        {id: 2, message: "It's my first post", likesCount: 10}
    ] as Array<PostType>,
    newPostText: '',
    profile: null,
};

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'UP-DATE-NEW-POST': {
            return {
                ...state,
                newPostText: action.newText
            };
        };
        case 'ADD-NEW-POST': {
            let newPost: PostType = {id: 5, message: action.postMessage, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        };
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        };
        default: return  state;
    }
};

export const addPostActionCreator = (postMessage: string) => {
    return {
        type: "ADD-NEW-POST",
        postMessage: postMessage
    } as const
};

export const upDateNewPostActionCreator = (newText: string) => {
    return {
        type: 'UP-DATE-NEW-POST',
        newText: newText
    } as const
};

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}