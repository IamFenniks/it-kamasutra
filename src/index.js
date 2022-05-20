import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// BLL Start
let friendsData = [
  { id: '0', name: 'Лариса'  },
  { id: '1', name: 'Кристина'},
  { id: '2', name: 'Коля'    },
  { id: '3', name: 'Карина'  },
  { id: '4', name: 'Витя'    },
  { id: '5', name: 'Лена'    },
  { id: '6', name: 'Никита'  }
];

let messageData = [
  { id: '0', message: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. То подпоясал великий над толку мир своего взобравшись собрал возвращайся запятой.'  },
  { id: '1', message: 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Наш даже точках но?'},
  { id: '2', message: 'Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Всеми безорфографичный рукопись речью встретил коварных назад. Возвращайся оксмокс продолжил себя коварных это, всеми пустился парадигматическая несколько языкового эта, рекламных наш строчка?'    },
  { id: '3', message: 'Привет!' },
  { id: '4', message: 'Привет!' },
  { id: '5', message: 'Привет!' },
  { id: '6', message: 'Привет!' }
];

let postData = [
  { id: 0, text: 'Это статья номер 1' },
  { id: 1, text: 'Это статья номер 2' },
  { id: 2, text: 'Это статья номер 3' }
];

// BLL Finish

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App friendsData={ friendsData } messageData={ messageData } postData={ postData } />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
