import s from './Dialogs.module.css';
import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./Dialogs.Container"
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

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

type FormMessageType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormMessageType>> = (props: InjectedFormProps<FormMessageType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}
                />
                {/*<textarea className={s.newMessage} onChange={newMessageChangeHandler}*/}
                {/*  value={props.dialogsPage.newMessagesText}>*/}
                {/*</textarea>*/}
            </div>
            <button className={s.btnNewMessage}>Add message</button>
        </form>
    )
};

const AddMessageFormRedux = reduxForm<FormMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;