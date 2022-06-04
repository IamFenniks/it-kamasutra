const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReduser = (state, action) => {
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
