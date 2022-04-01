import {ActionsType, DialogsPageType, MessageType} from "./store";

const initialState = {
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

 export const dialogsReducer = (state:DialogsPageType = initialState, action:ActionsType) => {
     switch (action.type) {
         case 'UPDATE-NEW-MESSAGE':
             state.newMessagesText = action.messageText;
             return state;
         case 'ADD-NEW-MESSAGE':
             const newMessageFriend: MessageType = {id: 4, message: action.newMessage};
             state.messages.push(newMessageFriend);
             return state;
         default: return state;
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