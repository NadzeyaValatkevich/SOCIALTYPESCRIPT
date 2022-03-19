
export type MessageType = {
    id: number,
    message: string
};

export type DialogType = {
    id: number,
    name: string
};

export type PostType = {
    id: number,
    message: string,
    likesCount: number
};

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
};

export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessagesText: string
};

type SidebarType = {};

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

export type StoreType = {
    _state:RootStateType,
    updateNewMessage: (messageText: string) => void,
    addNewMessage: (newMessage: string) => void,
    updateNewPost: (newText: string) => void,
    addNewPost: (postMessage: string) => void,
    _rerenderTree: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionsType) => void
}

export type ActionsType = updateNewMessageActionType | addNewMessageActionType | updateNewPostActionType | addNewPostActionType

type updateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE',
    messageText: string
};

type addNewMessageActionType = {
    type: 'ADD-NEW-MESSAGE',
    newMessage: string
};
type updateNewPostActionType = {
    type: 'UP-DATE-NEW-POST',
    newText: string
};
type addNewPostActionType = {
    type: 'ADD-NEW-POST',
    postMessage: string
};

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
        sidebar: {}
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
        if(action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessagesText = action.messageText
            this._rerenderTree()
        } else if(action.type === 'ADD-NEW-MESSAGE') {
            const newMessageFriend: MessageType = {id: 4, message: action.newMessage};
            this._state.dialogsPage.messages.push(newMessageFriend);
            this._rerenderTree()
        } else if(action.type === 'UP-DATE-NEW-POST') {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderTree()
        } else if(action.type === 'ADD-NEW-POST') {
            const newPost: PostType = {id: 5, message: action.postMessage, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._rerenderTree()
        }
    }
}




