import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'samurai-network/users/FOLLOW';
const UNFOLLOW = 'samurai-network/users/UNFOLLOW';
const SET_USERS = 'samurai-network/users/SET-USERS';
const SET_CURRENT_PAGE = 'samurai-network/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'samurai-network/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'samurai-network/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'samurai-network/users/TOGGLE-IS-FOLLOWING-PROGRESS';

export type UsersType = {
    id: number,
    photos: string
    name: string,
    status: string,
    followed: boolean,
};

export type InitialStateType = typeof initialState

export type ActionsUsersType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
// | ReturnType<typeof updateNewMessageActionCreator>

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    //dor disabled button
    followingInProgress: [] as Array<number>,
};

export const usersReducer = (state: InitialStateType = initialState, action: ActionsUsersType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] //добавляем в массив новую id
                    : state.followingInProgress.filter(id => id != action.userId) //удаляем id
            }
        default:
            return state;
    }
};

export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
};

export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
};

//set-аем всех users
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users
    } as const
};

//изменяем текущую страничку, по которой кликаем
export const setCurrentPage = ((currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    } as const
});

//устанавливаем общее количество пользователей
export const setTotalUsersCount = ((totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount,
    } as const
});

export const toggleIsFetching = ((isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    } as const
});

//disabled button при отправке запроса
export const toggleFollowingProgress = ((isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,
    } as const
});

//ThunkCreators
export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        //начинаю показывать крутелку
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))
        //начни получать мне пользователей
        const data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
};

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: (userId: number) => void) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
    };
    dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.followAPI.bind(usersAPI), followSuccess)
    }
};

export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollowAPI.bind(usersAPI), unfollowSuccess)
    }
};








