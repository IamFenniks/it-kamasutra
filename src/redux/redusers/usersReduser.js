import { followedAPI, userAPI } from "../../api/api";
import { updateObjectInArray } from "../../utils/object-helpers";
import { toggleDisable, toggleFetching } from "./commonReduser";

const FOLLOW = 'it-kama/usersPage/FOLLOW';
const UNFOLLOW = 'it-kama/usersPage/UNFOLLOW';
const SET_USERS = 'it-kama/usersPage/SET-USERS';
const SET_CURRENT_PAGE = 'it-kama/usersPage/SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'it-kama/usersPage/SET-TOTAL-COUNT';

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
                // this refuctoring in 'src/utils/object-helpers.js
               users: updateObjectInArray(state.users, action.id, 'id', { followed: true })  // Подсказать параметры - Ctrl+Shift+Space
            }
        case UNFOLLOW:
            return {
                ...state, 
                // this refuctoring in 'src/utils/object-helpers.js
                users: updateObjectInArray(state.users, action.id, 'id', { followed: false })
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
    return async (dispatch) => {
        // debugger
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleFetching(true));

        let data = await userAPI.getUsers(pageSize, currentPage);
        dispatch(toggleFetching(false)); 
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));  
    }
}

    // refuctoring of Thunk
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleDisable(true, userId));
    let data = await apiMethod(userId);
    // debugger
    if(data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleDisable(false, userId));
}
export const followThC = (userId) => {
    return async (dispatch) => {
        // let apiMethod = followedAPI.follow.bind(followedAPI);
        // let actionCreator = follow;
        // followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
        followUnfollowFlow(
            dispatch,
            userId, 
            followedAPI.follow.bind(followedAPI),
            follow
        );
    }
}
export const unfollowThC = (userId) => {
    return async (dispatch) => {
        // let apiMethod = followedAPI.unfollow.bind(followedAPI);
        // let actionCreator = unfollow;
        // followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
        followUnfollowFlow(
            dispatch,
            userId, 
            followedAPI.unfollow.bind(followedAPI),
            unfollow
        );
    }
}
// ThunkCtreator End

export default usersReduser;
