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
            ]
        },

        profilePage: {
            postData: [
                { id: 0, text: 'Это статья номер 1' },
                { id: 1, text: 'Это статья номер 2' },
                { id: 2, text: 'Это статья номер 3' }
            ],
            newPostText: [ 'It-kamasutra' ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost(postMessage) {
        let newPost = {
            id: 3,
            text: this._state.profilePage.newPostText
        };
    
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = "";
    
        this._callSubscriber( this._state );
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber( this._state );
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;
  