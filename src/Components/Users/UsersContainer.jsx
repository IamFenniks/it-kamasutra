import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC } from "../../redux/usersReduser";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}
  
let mapDispatchToProps = (dispatch) => {
    return {
        followed: (userId) => {
            dispatch(followAC(userId))
        },

        unfollowed: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        setPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },

        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
