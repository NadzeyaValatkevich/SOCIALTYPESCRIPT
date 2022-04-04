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
    newPostText: ''
};

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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