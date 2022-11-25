const TOGGLE_FETCHING = 'it-kama/common/TOGGLE-FETCHING';
const TOGGLE_DISABLE = 'it-kama/common/TOGGLE-DISABLE';

let initialState = {
    isFetching: false,
    followBtnDisabled: []
};

export const commonReduser = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.fetched
            }
        
            case TOGGLE_DISABLE:
            return {
                ...state,
                followBtnDisabled: action.fetched
                ? [ ...state.followBtnDisabled, action.userId ]
                : state.followBtnDisabled.filter(id => id !== action.userId)
            }
            
        default: return state;
    }
};

export const toggleFetching = (fetched) => {
    return { type: TOGGLE_FETCHING, fetched };
};

export const toggleDisable = (fetched, userId) => {
    return { type: TOGGLE_DISABLE, fetched, userId };
};

export default commonReduser;
