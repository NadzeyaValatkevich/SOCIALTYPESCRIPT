import s from './Dialogs.module.css';
import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./Dialogs.Container"
import {AddMessageFormRedux} from "../../components/Dialogs/Message/AddMessageForm";

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map((d, index) => <DialogItem key={index} name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map((m) => <Message key={m.id} message={m.message}/>);

    const addNewMessage = (values: {newMessageBody: string}) => {
        props.addNewMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};


export default Dialogs;