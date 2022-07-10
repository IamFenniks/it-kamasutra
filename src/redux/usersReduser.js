const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: []
};

export const usersReduser = (state = initialState, action) => {
    
    
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
               users: state.users.map(u => {
                   if(u.id === action.id){
                       return {...u, followed: true}
                   }
                   return u;
               })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            if(state.users.length > 0){
                return state
            }

            return {
                ...state,
                users: [...state.users, ...action.users]
            }
            
        default: return state;
    }
};

export const followAC = (userId) => {
    return { type: FOLLOW, id: userId };
};

export const unfollowAC = (userId) => {
    return { type: UNFOLLOW, id: userId };
};

export const setUsersAC = (users) => {
    return { type: SET_USERS, users: users };
};

export default usersReduser;
