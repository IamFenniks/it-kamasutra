import React from "react";
import { Link } from "react-router-dom";
import style from './Dialogs.module.css';

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
        { id: '3', message: 'Привет!'  },
        { id: '4', message: 'Привет!'    },
        { id: '5', message: 'Привет!'    },
        { id: '6', message: 'Привет!'  }
    ];
// BLL Finish

// Inside Comps Start
    const Friend = (props) => {
        return (
            <div className={style.friend}>
                <Link to={ '/dialogs/' + props.id }>
                    { props.name }
                </Link>
            </div>
        );
    }

    const Item = (props) => {
        return (
            <div className={style.item}><p>{ props.message }</p></div>
        );
    }
// Inside Comps Finish

const Dialogs = () => {
    return (
        <main className={style.dialogs}>
            <h3>Диалоги</h3>

            <div className={style.my_friends}>

                <nav className={style.nav}>
                    <Friend name={ friendsData[0].name }   id={ friendsData[0].id } />
                    <Friend name={ friendsData[1].name }   id={ friendsData[1].id } />
                    <Friend name={ friendsData[2].name }   id={ friendsData[2].id } />
                    <Friend name={ friendsData[3].name }   id={ friendsData[3].id } />
                    <Friend name={ friendsData[4].name }   id={ friendsData[4].id } />
                    <Friend name={ friendsData[5].name }   id={ friendsData[5].id } />
                    <Friend name={ friendsData[6].name }   id={ friendsData[6].id } />
                </nav>
            </div>

            <div className={style.messages}>
                <Item message={ messageData[0].message } id={ messageData[0].id } />
                <Item message={ messageData[1].message } id={ messageData[1].id } />
                <Item message={ messageData[2].message } id={ messageData[2].id } />
                <Item message={ messageData[3].message } id={ messageData[3].id } />
                <Item message={ messageData[4].message } id={ messageData[4].id } />
            </div>
        </main>
    );
}

export default Dialogs;