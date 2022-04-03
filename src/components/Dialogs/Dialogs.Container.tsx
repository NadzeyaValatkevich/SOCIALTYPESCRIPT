import React from 'react';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-Reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

// type DialogsMessagesPropsType = {
//     store: StoreType
// }

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store: StoreType) => {
                const addNewMessage = () => {
                    store.dispatch(addNewMessageActionCreator(store.getState().dialogsPage.newMessagesText))
                    store.dispatch(updateNewMessageActionCreator(''))
                };


                const newMessageChangeHandler = (messageText: string) => {
                    store.dispatch(updateNewMessageActionCreator(messageText))
                };
                return (
                    <Dialogs
                        updateNewMessage={newMessageChangeHandler}
                        addNewMessage={addNewMessage}
                        dialogsPage={store.getState().dialogsPage}/>
                )
            }}
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;