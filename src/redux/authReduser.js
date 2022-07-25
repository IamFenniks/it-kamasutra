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

export const setAuthUserData = (email, id, login) => { 
    // debugger
    return { type: SET_USER_DATA, userData: { email, id, login } }
}

export default authReduser;
  