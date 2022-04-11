import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-Reducer";
import {dialogsReducer} from "./dialogs-Reducer";
import {sidebarReducer} from "./sidebar-Reducer";
// import {ActionsType, RootStateType} from "./store";

// export type StoreType = {
//     _state: RootStateType,
//     updateNewMessage: (messageText: string) => void,
//     addNewMessage: (newMessage: string) => void,
//     updateNewPost: (newText: string) => void,
//     addNewPost: (postMessage: string) => void,
//     _rerenderTree: () => void,
//     subscribe: (observer: () => void) => void,
//     getState: () => RootStateType,
//     dispatch: (action: ActionsType) => void
// }

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
