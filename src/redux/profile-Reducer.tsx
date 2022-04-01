import {ActionsType, PostType, ProfilePageType} from "./store";


const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 20},
        {id: 2, message: "It's my first post", likesCount: 10}
    ],
    newPostText: ''
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
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