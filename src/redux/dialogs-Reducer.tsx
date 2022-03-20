import {ActionsType, DialogsPageType, MessageType} from "./state";


 export const dialogsReducer = (state:DialogsPageType , action:ActionsType) => {
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