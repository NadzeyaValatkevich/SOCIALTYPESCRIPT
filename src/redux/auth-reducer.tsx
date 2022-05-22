import {ActionsType} from "./store";

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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
};

export const setAuthUserData = (id: null | string, email: null | string, login: null | string) => {
    return {
        type: 'SET_USER_DATA',
        data: {
            id: id,
            email: email,
            login: login,
        }
    } as const;
};