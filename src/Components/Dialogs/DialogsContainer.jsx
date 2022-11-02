// import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/redusers/dialogsReduser";
import { WithAuthRedirect } from "../Hoc/WithAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText // ключ: state.(redux-store ключ).(alikeReduser ключ)
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);
