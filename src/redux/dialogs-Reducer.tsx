import {ActionsType} from "./store";

 export type DialogType = {
    id: number,
    name: string
};

 export type MessageType = {
     id: number,
     message: string
 };

 export type InitialStateType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessagesText: string
};

const initialState: InitialStateType = {
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
};

 export const dialogsReducer = (state:InitialStateType = initialState, action:ActionsType): InitialStateType => {

     switch (action.type) {
         case 'UPDATE-NEW-MESSAGE':
             return {
                 ...state,
                 newMessagesText: action.messageText
             }
         case 'ADD-NEW-MESSAGE':
             return {
                 ...state,
                 newMessagesText: '',
                 messages: [...state.messages, {id: 4, message: action.newMessage}]
             }
         default:
             return state;
     }
};

export const addNewMessageActionCreator = (newMessage: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        newMessage: newMessage
    } as const
}

export const updateNewMessageActionCreator = (messageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        messageText: messageText
    } as const
}