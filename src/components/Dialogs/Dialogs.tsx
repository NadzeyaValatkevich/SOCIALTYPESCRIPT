import s from './Dialogs.module.css';
import React, {ChangeEvent} from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    ActionsType,
    addNewMessageActionCreator,
    DialogsPageType,
    updateNewMessageActionCreator
} from "../../redux/state";

type DialogsMessagesPropsType = {
    dialogsPage: DialogsPageType,
    // addNewMessage: (newMessage: string) => void,
    // updateNewMessage: (messageText: string) => void,
    dispatch: (action:ActionsType) => void
}
const Dialogs = (props:DialogsMessagesPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);


    const addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator(props.dialogsPage.newMessagesText))
        props.dispatch(updateNewMessageActionCreator(''))
    };


    const newMessageChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageActionCreator(e.currentTarget.value))
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea className={s.newMessage} onChange={newMessageChangeHandler} value={props.dialogsPage.newMessagesText}></textarea>
            <button className={s.btnNewMessage} onClick={addNewMessage}>Add message</button>

        </div>
    )
};

export default Dialogs;