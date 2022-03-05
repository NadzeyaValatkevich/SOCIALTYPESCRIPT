import s from './Dialogs.module.css';
import React, {ChangeEvent} from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/state";

type DialogsMessagesPropsType = {
    dialogsPage: DialogsPageType,
    addNewMessage: (newMessage: string) => void,
    updateNewMessage: (messageText: string) => void,
}
const Dialogs = (props:DialogsMessagesPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);


    const addNewMessage = () => {
        props.addNewMessage(props.dialogsPage.newMessagesText);
        props.updateNewMessage('');
    };

    const newMessageChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
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