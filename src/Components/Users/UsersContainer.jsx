// import React from "react";
import { connect } from "react-redux";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogsReduser";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
