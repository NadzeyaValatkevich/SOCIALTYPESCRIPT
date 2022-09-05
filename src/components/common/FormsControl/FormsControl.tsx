import React, {InputHTMLAttributes, TextareaHTMLAttributes} from 'react';
import styles from './FormsControls.module.css'

type FormsControlType<T> = {
    input: T,
    meta: any,
    placeholder?: string,
    children: any,
    type?: string
};

const FormControl = ({input, meta: {touched, error}, children}: FormsControlType<TextareaHTMLAttributes<HTMLTextAreaElement> | InputHTMLAttributes<HTMLInputElement>>) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea = (props: FormsControlType<TextareaHTMLAttributes<HTMLTextAreaElement>>) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
};

export const Input = (props: FormsControlType<InputHTMLAttributes<HTMLInputElement>>) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

