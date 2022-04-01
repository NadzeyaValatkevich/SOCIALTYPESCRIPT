import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-Reducer";
import {dialogsReducer} from "./dialogs-Reducer";
import {sidebarReducer} from "./sidebar-Reducer";
import {ActionsType, RootStateType} from "@/redux/store";

type StoreType = {
    _state: RootStateType,
    updateNewMessage: (messageText: string) => void,
    addNewMessage: (newMessage: string) => void,
    updateNewPost: (newText: string) => void,
    addNewPost: (postMessage: string) => void,
    _rerenderTree: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionsType) => void
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer
})

export const store: StoreType = createStore(reducers);