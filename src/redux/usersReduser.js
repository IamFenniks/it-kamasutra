const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';

let initialState = {
    
    users: [],
    totalCount: 0,
    pageSize: 24,
    currentPage: 1,
    isFetching: false
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
        
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.fetched
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

export const setCurrentPageAC = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage };
};

export const setTotalCountAC = (totalCount) => {
    return { type: SET_TOTAL_COUNT, totalCount };
};

export const toggleFetchingAC = (fetched) => {
    return { type: TOGGLE_FETCHING, fetched };
};

export default usersReduser;
