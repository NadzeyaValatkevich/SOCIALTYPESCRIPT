export type MessageType = {
    id:number,
    message:string
};

export type DialogType = {
    id:number,
    name:string
};

export type PostType = {
    id:number,
    message:string,
    likesCount: number
};

 export type ProfilePageType = {
    posts: Array<PostType>
};

type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
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
        ]
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
        ]
    },
    sidebar: {}
};