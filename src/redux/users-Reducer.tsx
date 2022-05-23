import {usersAPI} from "../api/api";

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
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case "SET_USERS":
            return {...state, users: action.users};
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            };
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.count
            };
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            };
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] //добавляем в массив новую id
                    : state.followingInProgress.filter(id => id != action.userId) //удаляем id
            }
        default:
            return  state;
    }
};

export const followSuccess = (userId:number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
};

export const unfollowSuccess = (userId:number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
};

//set-аем всех users
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
};

//изменяем текущую страничку, по которой кликаем
export const setCurrentPage = ((currentPage:number) => {
    return {
        type:"SET-CURRENT-PAGE",
        currentPage,
    } as const
});

//устанавливаем общее количество пользователей
export const setTotalUsersCount = ((totalUsersCount: number) => {
    return {
        type:"SET-TOTAL-USERS-COUNT",
        count: totalUsersCount,
    } as const
});

export const toggleIsFetching =  ((isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching,
    } as const
});

//disabled button при отправке запроса
export const toggleFollowingProgress =  ((isFetching: boolean, userId: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        isFetching,
        userId,
    } as const
});

//ThunkCreators
export const getUsers = (currentPage:number, pageSize: number) => {
    return (dispatch: any) => {
        //начинаю показывать крутелку
        dispatch(toggleIsFetching(true));
        //начни получать мне пользователей
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
};

export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.followAPI(userId)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
};

export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollowAPI(userId)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
};








