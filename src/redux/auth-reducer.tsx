import {ActionsType} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

type initialStateAuthType = {
    id: null | string,
    email: null | string,
    login: null | string,
    isAuth: boolean
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state: initialStateAuthType = initialState, action: ActionsType): initialStateAuthType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};

export const setAuthUserData = (id: null | string, email: null | string, login: null | string, isAuth:boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const;
};

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            if(res.data.resultCode === 0) {
                let {id, email, login} = res.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
};

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {

    authAPI.login(email, password, rememberMe)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some err"
                dispatch(stopSubmit('login', message))
            }
        })
};

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
};