const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    
    _state: {
        dialogsPage: {
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
        },

        profilePage: {
            postData: [
                { id: 0, text: 'Это статья номер 1' },
                { id: 1, text: 'Это статья номер 2' },
                { id: 2, text: 'Это статья номер 3' }
            ],
            newPostText: ''
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === ADD_POST){
            let newPost = {
                id: 3,
                text: this._state.profilePage.newPostText
            };
        
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = "";
        
            this._callSubscriber( this._state );
        }

        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber( this._state );
        }

        else if(action.type === ADD_MESSAGE){
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText
            };
        
            this._state.dialogsPage.messageData.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
        
            this._callSubscriber( this._state );
        } 
        
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber( this._state );
        }
    }
}


export const addPostAC = () => { 
    return { type: ADD_POST }
}
export const addMessageAC = () => { 
    return { type: ADD_MESSAGE }
}

export const updateNewPostTextAC = (postText) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: postText }
}
export const updateNewMessageTextAC = (messageText) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: messageText }
}

export default store;

window.store = store;
  