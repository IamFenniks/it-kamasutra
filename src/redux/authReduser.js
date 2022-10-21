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
            return { 
                ...state,
                ...action.payload,
                isAuth: true
            }
        
        default: return state;
    }
}

// ActionCreators Start
export const setAuthUserData = (userId, email, login, isAuth) => { 
    return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } }
}
// ActionCreators Finish

// ThunkCreators Start
export const isAuthThC = () => {
    return (dispatch) => {
        loginAPI.auth()
            .then(data => {
               if(data.resultCode === 0){
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true)); 
               }
            });
    }
}

export const loginThC = (email, password, rememberMe) => (dispatch) => {
    loginAPI.login( email, password, rememberMe )
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(isAuthThC()); 
            }
        });
    }


export const logoutThC = () => (dispatch) => {
    loginAPI.logout()
        .then(response => {
            debugger;
            if(response.data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false)); 
            }
        });
    }

// ThunkCreators Finish

export default authReduser;
  