import { loginAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userData: {
        email: null,
        id: null,
        login: null,
        isAuth: false
    }
};

export const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, userData: action.userData, isAuth: true }
        
        default: return state;
    }
}

// ActionCreators Start
export const setAuthUserData = (email, id, login) => { 
    // debugger
    return { type: SET_USER_DATA, userData: { email, id, login } }
}
// ActionCreators Finish

// ThunkCreators Start
export const isAuthThC = () => {
    return (dispatch) => {
        loginAPI.auth()
            .then(data => {
                // debugger
               if(data.resultCode === 0){
                    let {email, id, login} = data.data;
                    dispatch(setAuthUserData(email, id, login)); 
               }
            });
    }
}
// ThunkCreators Finish

export default authReduser;
  