import {addNewMessageActionCreator, InitialStateType} from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";
// import {StoreContext} from "../../StoreContext";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import React from "react";

type MapStatePropsType = {
    dialogsPage: InitialStateType
};
 type MapDispatchPropsType = {
     addNewMessage: (newMessageBody: string) => void
 };

 export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
};


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewMessage: (newMessageBody: string) => {
            // dispatch(addNewMessageActionCreator(store.getState().dialogsPage.newMessagesText))
            dispatch(addNewMessageActionCreator(newMessageBody))
        }
    }
};


export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs)

