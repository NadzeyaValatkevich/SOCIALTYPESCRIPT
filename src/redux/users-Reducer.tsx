export type UsersType = {
    id: number,
    photos: string
    name: string,
    status: string,
    followed: boolean,
};

export type InitialStateType = typeof initialState

export type ActionsUsersType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
// | ReturnType<typeof updateNewMessageActionCreator>

const initialState = {
    users: [
        // {id: 1, photoUrl: 'https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/12571_800x480.jpg', fullName: 'Nadzeya', status: 'I like to read', followed: false,  location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoUrl: 'https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/12571_800x480.jpg', fullName: 'Lyda', status: 'I like to cook',followed: true,  location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 3, photoUrl: 'https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/12571_800x480.jpg', fullName: 'Alesha', status: 'I like sport',followed: false,  location: {city: 'Moscow', country: 'Russia'}},

    ] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,

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
            }
        default: return  state;
    }
};

export const followAC = (userId:number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
};

export const unFollowAC = (userId:number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
};

//set-аем всех users
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
};

//изменяем текущую страничку, по которой кликаем
export const setCurrentPageAC = ((currentPage:number) => {
    return {
        type:"SET-CURRENT-PAGE",
        currentPage,
    } as const
});

//устанавливаем общее количество пользователей
export const setUsersTotalCountAC = ((totalUsersCount: number) => {
    return {
        type:"SET-TOTAL-USERS-COUNT",
        count: totalUsersCount,
    } as const
});

export const toggleIsFetchingAC =  ((isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching,
    } as const
});




