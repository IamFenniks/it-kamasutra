const ADD_MESSAGE = 'it-kama/dialogs/ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'it-kama/dialogs/UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    friendsData: [
        { id: '0', name: 'Лариса'  },
        { id: '1', name: 'Кристина'},
        { id: '2', name: 'Коля'    },
        { id: '3', name: 'Карина'  },
        { id: '4', name: 'Витя'    },
        { id: '5', name: 'Лена'    },
        { id: '6', name: 'Никита'  }
    ],
    messageData: [
        { id: '0', message: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. То подпоясал великий над толку мир своего взобравшись собрал возвращайся запятой.'  },
        { id: '1', message: 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Наш даже точках но?'},
        { id: '2', message: 'Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Всеми безорфографичный рукопись речью встретил коварных назад. Возвращайся оксмокс продолжил себя коварных это, всеми пустился парадигматическая несколько языкового эта, рекламных наш строчка?'    },
        { id: '3', message: 'Привет!' },
        { id: '4', message: 'Привет!' },
        { id: '5', message: 'Привет!' },
        { id: '6', message: 'Привет!' }
    ],
    newMessageText: ''
};

export const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 7,
                message: state.newMessageText
            };

            let stateCopy = { ...state };
            stateCopy.messageData = [ ...state.messageData ];
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = { ...state }
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
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
  