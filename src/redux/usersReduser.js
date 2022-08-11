import { followedAPI, userAPI } from "../api/api";
import { toggleDisable, toggleFetching } from "./commonReduser";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 24,
    currentPage: 1
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
            return {
                ...state,
                users: action.users
            }
        
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }

        default: return state;
    }
};

export const follow = (userId) => {
    return { type: FOLLOW, id: userId };
};

export const unfollow = (userId) => {
    return { type: UNFOLLOW, id: userId };
};

export const setUsers = (users) => {
    return { type: SET_USERS, users: users };
};

export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage };
};

export const setTotalCount = (totalCount) => {
    return { type: SET_TOTAL_COUNT, totalCount };
};

// ThunkCtreator Start
export const getUsersThC = (pageSize, currentPage) => {
    return (dispatch) => {
        // debugger
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleFetching(true));

        userAPI.getUsers(pageSize, currentPage)
            .then(data => { dispatch(toggleFetching(false)); 
                            dispatch(setUsers(data.items));
                            dispatch(setTotalCount(data.totalCount)); 
                        });  
    }
}

export const unfollowThC = (userId) => {
    return (dispatch) => {
        dispatch(toggleDisable(true, userId));
        followedAPI.unfollow(userId)
            .then(data => { 
                // debugger
                if(data.resultCode == 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleDisable(false, userId)); 
        });
    }
}

export const followThC = (userId) => {
    return (dispatch) => {
        dispatch(toggleDisable(true, userId));
        followedAPI.follow(userId)
            .then(data => { 
                // debugger
                if(data.resultCode == 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleDisable(false, userId)); 
        });
    }
}
// ThunkCtreator End

export default usersReduser;
