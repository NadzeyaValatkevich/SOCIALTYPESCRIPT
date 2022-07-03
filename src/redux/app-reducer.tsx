
import {Dispatch} from "redux";
import {getAuthUserData} from "../redux/auth-reducer";

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

 type initialStateType = {
     initialized: boolean
 }
const initialState = {
    initialized: false
};

export const appReducer = (state:initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
};

type ActionsType = InitializedSuccessActionType;

type InitializedSuccessActionType = ReturnType<typeof initializedSuccess>


export const initializedSuccess = () => ({type: INITIALIZED_SUCCES} as const);

export const initializeApp = () => (dispatch: Dispatch) => {
    // @ts-ignore
   let promise = dispatch(getAuthUserData());
   Promise.all([promise])
       .then(() => {
       dispatch(initializedSuccess())
   })
}