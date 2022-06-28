import React, {InputHTMLAttributes, TextareaHTMLAttributes} from 'react';
import styles from './FormsControls.module.css'

type FormsControlType<T> = {
    input: T,
    meta: any,
    placeholder?: string,
    children: any,
    type?: string
};

const FormControl = (props: FormsControlType<TextareaHTMLAttributes<HTMLTextAreaElement> | InputHTMLAttributes<HTMLInputElement>>) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
};

export const Textarea = (props: FormsControlType<TextareaHTMLAttributes<HTMLTextAreaElement>>) => {
    return <FormControl {...props}> <textarea {...props.input} {...props}/> </FormControl>
}

export const Input = (props: FormsControlType<InputHTMLAttributes<HTMLInputElement>>) => {
    console.log(props)
    return <FormControl {...props}><input {...props.input} {...props} /></FormControl>
}