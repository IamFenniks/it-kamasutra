import React from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    debugger;
    let state = props.store.getState();

    let addMessage = () => {
        let action = addMessageAC();
        props.store.dispatch( action );
    }
    
    let onMessageChange = (messageText) => {
        let action = updateNewMessageTextAC(messageText);
        props.store.dispatch( action );
    }
    return (
        <Dialogs updateNewMessageText={ onMessageChange }
                 addMessage={ addMessage }
                 state={ state.dialogsPage }
                 newMessageText={ state.dialogsPage.newMessageText } />
    );
}

export default DialogsContainer;