import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '34703736-4385-4a40-886f-8a50a0865c2b'
    }
});
export const usersAPI = {
    getUsers(pageNumber: number, pageSize: number ) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
}
};
