import {addPostActionCreator, profileReducer, upDateNewPostActionCreator} from "./profile-Reducer";
import {addNewMessageActionCreator, dialogsReducer, updateNewMessageActionCreator} from "./dialogs-Reducer";
import {sidebarReducer} from "./sidebar-Reducer";

type MessageType = {
    id: number,
    message: string
};

export type DialogType = {
    id: number,
    name: string
};

type PostType = {
    id: number,
    message: string,
    likesCount: number
};

type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
};

export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessagesText: string
};

export type SidebarPageType = {};

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebarPage: SidebarPageType
}

export type StoreType = {
    _state: RootStateType,
    updateNewMessage: (messageText: string) => void,
    addNewMessage: (newMessage: string) => void,
    updateNewPost: (newText: string) => void,
    addNewPost: (postMessage: string) => void,
    _rerenderTree: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof upDateNewPostActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 20},
                {id: 2, message: "It's my first post", likesCount: 10}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Nadzeya'},
                {id: 1, name: 'Vadim'},
                {id: 1, name: 'Arina'},
                {id: 1, name: 'Pasha'},
                {id: 1, name: 'Sasha'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Good morning!'}
            ],
            newMessagesText: ''
        },
        sidebarPage: {}
    },
    updateNewMessage(messageText: string) {
        this._state.dialogsPage.newMessagesText = messageText
        this._rerenderTree()
    },
    addNewMessage(newMessage: string) {
        const newMessageFriend: MessageType = {id: 4, message: newMessage};
        this._state.dialogsPage.messages.push(newMessageFriend);
        this._rerenderTree();
    },
    updateNewPost(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._rerenderTree();
    },
    addNewPost(postMessage: string) {
        const newPost: PostType = {id: 5, message: postMessage, likesCount: 0};
        this._state.profilePage.posts.push(newPost);
        this._rerenderTree();
    },
    _rerenderTree() {
        console.log('State has been changed')
    },
    subscribe(observer) {
        this._rerenderTree = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._rerenderTree()
    }
}




