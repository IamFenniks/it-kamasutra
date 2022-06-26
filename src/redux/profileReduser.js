const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postData: [
        { id: 0, text: 'Это статья номер 1' },
        { id: 1, text: 'Это статья номер 2' },
        { id: 2, text: 'Это статья номер 3' }
    ],
    newPostText: ''
};

export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                text: state.newPostText,
            };
            state.postData.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
            
        default: return state;
    }
};

export const addPostAC = () => {
    return { type: ADD_POST };
};

export const updateNewPostTextAC = (postText) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: postText };
};

export default profileReduser;
