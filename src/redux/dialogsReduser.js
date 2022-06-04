const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReduser = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText
            };
            state.messageData.push(newMessage);
            state.newMessageText = "";
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default: return state;
    }
}

export const addMessageAC = () => { 
    return { type: ADD_MESSAGE }
}

export const updateNewMessageTextAC = (messageText) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: messageText }
}

export default dialogsReduser;
  