import { isAuthThC } from "./authReduser";

const SET_INISIALIZED = 'SET_INISIALIZED';

let initialState = {
    inisialized: false
};

export const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_INISIALIZED:
            return { 
                ...state,
                inisialized: true
            }
        
        default: return state;
    }
}

// ActionCreators Start
export const setInisializing = () => ( { type: SET_INISIALIZED } )
// ActionCreators Finish

// ThunkCreators Start
export const inisializeApp = () => (dispatch) => {
    let promis = dispatch(isAuthThC());
    
    Promise.all([promis]).then(() => {
        dispatch(setInisializing());
    });
}
// ThunkCreators Finish

export default appReduser;
  