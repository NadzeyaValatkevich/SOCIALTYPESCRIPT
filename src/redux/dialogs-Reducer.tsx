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
    ]
};

 export const dialogsReducer = (state:InitialStateType = initialState, action:ActionsType): InitialStateType => {

     switch (action.type) {
         case 'ADD-NEW-MESSAGE':
             return {
                 ...state,
                 messages: [...state.messages, {id: 4, message: action.newMessageBody}]
             }
         default:
             return state;
     }
};

export const addNewMessageActionCreator = (newMessageBody: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        newMessageBody
    } as const
};