import React from "react";
import DialogFriend from "./DialogFriend/DialogsFriend";
import DialogItem from "./DialogItem/DialogsItem";
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    
    // .Maping start
        let elementFriend  = props.state.friendsData.map(f => <DialogFriend name={ f.name }       id={ f.id } />);
        let elementMessage = props.state.messageData.map(m => <DialogItem   message={ m.message } id={ m.id } />);
    // .Maping finish

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
            </div>
        </main>
    );
}

export default Dialogs;