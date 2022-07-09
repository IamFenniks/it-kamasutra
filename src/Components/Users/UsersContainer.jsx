// import React from "react";
import { connect } from "react-redux";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogsReduser";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}
  
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (messageText) => {
            let action = updateNewMessageTextAC(messageText);
            dispatch(action);
        },
        addMessage: () => {
            let action = addMessageAC();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
