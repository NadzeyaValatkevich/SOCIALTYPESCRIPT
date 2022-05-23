import {addNewMessageActionCreator, InitialStateType, updateNewMessageActionCreator} from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";
// import {StoreContext} from "../../StoreContext";
import {connect} from "react-redux";
import {AppStateType, store} from "../../redux/redux-store";
import {Dispatch} from "redux";

// type DialogsMessagesPropsType = {
//     store: StoreType
// }

// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             { (store: StoreType) => {
//                 const addNewMessage = () => {
//                     store.dispatch(addNewMessageActionCreator(store.getState().dialogsPage.newMessagesText))
//                     store.dispatch(updateNewMessageActionCreator(''))
//                 };
//
//
//                 const newMessageChangeHandler = (messageText: string) => {
//                     store.dispatch(updateNewMessageActionCreator(messageText))
//                 };
//                 return (
//                     <Dialogs
//                         updateNewMessage={newMessageChangeHandler}
//                         addNewMessage={addNewMessage}
//                         dialogsPage={store.getState().dialogsPage}/>
//                 )
//             }}
//         </StoreContext.Consumer>
//     )
// };
type MapStatePropsType = {
    dialogsPage: InitialStateType,
    isAuth: boolean
};
 type MapDispatchPropsType = {
     updateNewMessage: (messageText:string) => void,
     addNewMessage: () => void
 };

 export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessage: (messageText:string) => {
            dispatch(updateNewMessageActionCreator(messageText))
        },

        addNewMessage: () => {
            dispatch(addNewMessageActionCreator(store.getState().dialogsPage.newMessagesText))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

