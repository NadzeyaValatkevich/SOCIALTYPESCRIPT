import {addNewMessageActionCreator, InitialStateType, updateNewMessageActionCreator} from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialogs";
// import {StoreContext} from "../../StoreContext";
import {connect} from "react-redux";
import {AppStateType, store} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

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
    dialogsPage: InitialStateType
};
 type MapDispatchPropsType = {
     updateNewMessage: (messageText:string) => void,
     addNewMessage: () => void
 };

 export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
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
 let AuthRedirectComponent = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

