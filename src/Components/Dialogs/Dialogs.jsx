import React from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogsReduser";
import DialogFriend from "./DialogFriend/DialogsFriend";
import DialogItem from "./DialogItem/DialogsItem";
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    
    // .Maping start
        let elementFriend  = props.state.friendsData.map(f => <DialogFriend name={ f.name }       id={ f.id } />);
        let elementMessage = props.state.messageData.map(m => <DialogItem   message={ m.message } id={ m.id }  />);
    // .Maping finish

    let addMessage = () => {
        props.dispatch( addMessageAC() );
    }

    // let newMessageElement = React.createRef(); Отказываемся от Ref
    let newMessageText = props.state.newMessageText;
    
    let onMessageChange = (e) => {
        let messageText = e.target.value;  // Ноходим textarea по параметру и таргетингу
        props.dispatch( updateNewMessageTextAC(messageText) );
    }
    return (
        <main className={style.dialogs}>
            <h3>Диалоги</h3>

            <div className={style.my_friends}>

                <nav className={style.nav}>
                    { elementFriend }
                </nav>
            </div>

            <div className={style.messages}>
                { elementMessage }

                <div className={style.addMessage}>
                    <div>
                        <textarea 
                            // ref={ newMessageElement }
                            onChange={ onMessageChange }
                            value={ newMessageText }
                            placeholder='Введите сообщение...' />
                    </div>
                    
                    <div> <button onClick={ addMessage }> Добавить </button> </div>
                </div>
            </div>
        </main>
    );
}

export default Dialogs;