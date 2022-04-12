export type UsersType = {
    id: number,
    photoUrl: string
    fullName: string,
    status: string,
    followed: boolean,
    location: {city: string, country: string}
};

export type InitialStateType = typeof initialState

export type ActionsUsersType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    // | ReturnType<typeof updateNewMessageActionCreator>

const initialState = {
    users: [
        // {id: 1, photoUrl: 'https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/12571_800x480.jpg', fullName: 'Nadzeya', status: 'I like to read', followed: false,  location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoUrl: 'https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/12571_800x480.jpg', fullName: 'Lyda', status: 'I like to cook',followed: true,  location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 3, photoUrl: 'https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/12571_800x480.jpg', fullName: 'Alesha', status: 'I like sport',followed: false,  location: {city: 'Moscow', country: 'Russia'}},

    ] as Array<UsersType>,
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
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}


        default: return  state;
    }
};

export const followAC = (userId:number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export const unFollowAC = (userId:number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}