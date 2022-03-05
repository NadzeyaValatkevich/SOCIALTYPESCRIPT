let rerenderTree = () => {
    console.log('State has been changed')
}
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

export let state: RootStateType = {
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
};

export const addNewPost = (postMessage: string) => {
    const newPost: PostType = {id: 5, message: postMessage, likesCount: 0};
    state.profilePage.posts.push(newPost);
    rerenderTree();
};

export const updateNewPost = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderTree();
};

export const addNewMessage = (newMessage: string) => {
    const newMessageFriend: MessageType = {id: 4, message: newMessage};
    state.dialogsPage.messages.push(newMessageFriend);
    rerenderTree();
};

export const updateNewMessage = (messageText: string) => {
    state.dialogsPage.newMessagesText = messageText;
    rerenderTree();
};

export const  subscribe = (observer: () => void) => {
    rerenderTree = observer;
}



