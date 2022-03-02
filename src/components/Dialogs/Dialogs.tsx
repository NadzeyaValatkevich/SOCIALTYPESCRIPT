import s from './Dialogs.module.css';
import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "@/redux/state";

type DialogsMessagesPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}
const Dialogs = (props:DialogsMessagesPropsType) => {

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements = props.messages.map(m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
};

export default Dialogs;