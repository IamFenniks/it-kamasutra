import { ProfileAPI } from "../api/api";
import { toggleFetching } from "./commonReduser";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_USER_PROFILE = 'ADD-USER-PROFILE';

let initialState = {
    postData: [
        { id: 0, text: 'Это статья номер 1' },
        { id: 1, text: 'Это статья номер 2' },
        { id: 2, text: 'Это статья номер 3' }
    ],
    newPostText: '',
    userProfile: null
};

export const profileReduser = (state = initialState, action) => {
    
    let stateCopy = { ...state, ...state.postData }
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                text: state.newPostText,
            };
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;

        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;

        case ADD_USER_PROFILE: 
            return {
                ...state,
                userProfile: action.profile
            }
            
        default: return state;
    }
};

// ActionCreators Start
export const addPost = () => {
    return { type: ADD_POST };
};
export const updateNewPostText = (postText) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: postText };
};
export const addUserProfile = (profile) => {
    return { type: ADD_USER_PROFILE, profile};
}
// ActionCreators Finish

// Thunks Start
export const getMyProfThC = () => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        ProfileAPI.getMyProfile()
            .then(data => {
                // debugger
                dispatch(toggleFetching(false));
                dispatch(addUserProfile(data)) 
            }
        );
    }
}
export const getUserProfThC = (userId) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        ProfileAPI.getUserProfile(userId)
            .then(data => {
                // debugger
                dispatch(toggleFetching(false));
                dispatch(addUserProfile(data)) 
            }
        );
    }
}
// Thunks Finish

export default profileReduser;
