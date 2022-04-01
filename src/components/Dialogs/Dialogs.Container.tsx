
import React from 'react';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-Reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";

type DialogsMessagesPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsMessagesPropsType) => {

    const addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator(props.store.getState().dialogsPage.newMessagesText))
        props.store.dispatch(updateNewMessageActionCreator(''))
    };


    const newMessageChangeHandler = (messageText:string) => {
        props.store.dispatch(updateNewMessageActionCreator(messageText))
    };

    return <Dialogs
        updateNewMessage={newMessageChangeHandler}
        addNewMessage={addNewMessage}
        dialogsPage={props.store.getState().dialogsPage}/>
};

export default DialogsContainer;