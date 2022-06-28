import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../../../components/Dialogs/Dialogs.module.css";
import {Textarea} from "../../../components/common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/valodators/validators";

type FormMessageType = {
    newMessageBody: string
};

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<FormMessageType>> = (props: InjectedFormProps<FormMessageType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}
                />
            </div>
            <button className={s.btnNewMessage}>Add message</button>
        </form>
    )
};

export const AddMessageFormRedux = reduxForm<FormMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm)