import { ProfileAPI } from "../../api/api";
import { toggleFetching } from "./commonReduser";

                // Константы должны быть уникальны
const ADD_POST = 'it-kama/profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'it-kama/profile/UPDATE-NEW-POST-TEXT';
const ADD_USER_PROFILE = 'it-kama/profile/ADD-USER-PROFILE';
const SET_STATUS = 'it-kama/profile/SET_STATUS';
const SAVE_PHOTO = 'it-kama/profile/SAVE_PHOTO';

let initialState = {
    postData: [
        { id: 0, text: 'Это статья номер 1' },
        { id: 1, text: 'Это статья номер 2' },
        { id: 2, text: 'Это статья номер 3' },
    ],
    newPostText: '',
    userProfile: null,
    status: ''
};

export const profileReduser = (state = initialState, action) => {
    let stateCopy = { ...state, ...state.postData }

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                text: action.postText,
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

        case SET_STATUS:
            return {  
                ...state,
                status: action.status
            }

        case SAVE_PHOTO:
            return {
                ...state,
                userProfile: { ...state.userProfile, photos: action.photos }
            }

        default: return state;
    }
};

// ActionCreators Start
export const addPost = (postText) => {
    return { type: ADD_POST, postText };
};
export const updateNewPostText = (postText) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: postText };
};
export const addUserProfile = (profile) => {
    return { type: ADD_USER_PROFILE, profile };
}
export const setUserStatus = (status) => ({ type: SET_STATUS, status })
// debugger;
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO, photos }) // photos приходят из сервака profile
// ActionCreators Finish

//----------------------------------------

// Thunks Start
export const getMyProfThC = () => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await ProfileAPI.getMyProfile();
    
    dispatch(toggleFetching(false));
    dispatch(addUserProfile(response.data))
}

export const getUserProfThC = (userId) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await ProfileAPI.getUserProfile(userId);
    
    dispatch(toggleFetching(false));
    dispatch(addUserProfile(response.data))
}
// debugger;
export const savePhotoThC = (photo) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(photo);
    
    dispatch(savePhotoSuccess(response.data.data.photos));
}

export const getUserStatusThC = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getUserStatus(userId);
    
    dispatch(setUserStatus(response.data));
}
export const updateStatusThC = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status);
    if (response.data.resaultCode === 0) {
        dispatch(setUserStatus(status));
    }
}
export const saveProfDataThC = (profile) => async (dispatch) => {
    let response = await ProfileAPI.setProfileData(profile);
    if (response.data.resaultCode === 0) {
        dispatch(addUserProfile(profile));
    }
}

// Thunks Finish

export default profileReduser;
