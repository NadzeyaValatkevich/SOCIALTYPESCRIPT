import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '34703736-4385-4a40-886f-8a50a0865c2b'
    }
});
export const usersAPI = {
    getUsers(pageNumber: number, pageSize: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    unfollowAPI(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followAPI(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    }
}

export const loginAPI = {
    getLoginUser() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    }
};

export const profileAPI = {
    getProfileUser(userId:string) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            });
    }
};
