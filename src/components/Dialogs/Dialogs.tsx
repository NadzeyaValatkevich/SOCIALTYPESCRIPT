import s from './Dialogs.module.css';
import React, {ChangeEvent} from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./Dialogs.Container";

// type DialogsMessagesPropsType = {
//     addNewMessage: () => void,
//     updateNewMessage: (messageText: string) => void,
//     dialogsPage: DialogsPageType
// }

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    const addNewMessage = () => {
        props.addNewMessage()
    };

    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <textarea className={s.newMessage} onChange={newMessageChangeHandler}
                      value={props.dialogsPage.newMessagesText}></textarea>
            <button className={s.btnNewMessage} onClick={addNewMessage}>Add message</button>

        </div>
    )
};

export default Dialogs;