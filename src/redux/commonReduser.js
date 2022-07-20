const TOGGLE_FETCHING = 'TOGGLE-FETCHING';

let initialState = {
    isFetching: false
};

export const commonReduser = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.fetched
            }
            
        default: return state;
    }
};

export const toggleFetching = (fetched) => {
    return { type: TOGGLE_FETCHING, fetched };
};

export default commonReduser;
