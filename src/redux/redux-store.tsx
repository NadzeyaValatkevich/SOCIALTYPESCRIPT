import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-Reducer";
import {dialogsReducer} from "./dialogs-Reducer";
import {sidebarReducer} from "./sidebar-Reducer";
import {usersReducer} from "./users-Reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "../redux/app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
