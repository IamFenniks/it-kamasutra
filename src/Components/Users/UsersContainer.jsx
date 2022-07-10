import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC } from "../../redux/usersReduser";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
  
let mapDispatchToProps = (dispatch) => {
    return {
        followed: (userId) => {
            dispatch(followAC(userId))
        },

        unfollowed: (userId) => {
            dispatch(unfollowAC(userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
