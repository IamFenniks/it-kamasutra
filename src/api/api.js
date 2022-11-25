import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4c541e25-0538-45bc-b14f-040beb1df540'
    }
});

export const userAPI = {
    getUsers(pageSize, currentPage) {
        // debugger;
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => { 
                return response.data 
            }) 
    }
}
export const followedAPI = {
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        });
    },
    
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
        .then(response => {
            return response.data
        });
    }
}
export const loginAPI = {
    auth() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    },
    login( email, password, rememberMe = false ) {
        return instance.post('auth/login', { email, password, rememberMe });
    },
    logout() {
        return instance.delete('auth/login');
    }
}

export const ProfileAPI = {
    getMyProfile(userId) {
        return instance.get('profile/25073');    
    },
    
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`);    
    },
    
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`);    
    },
    
    updateStatus(status) {
        return instance.put(`profile/status`, { status }); 
    }
}
