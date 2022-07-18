import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC } from "../../redux/usersReduser";
import Users from "./Users";

class UsersClass extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {  this.props.setUsers(response.data.items);
                                 this.props.setTotalCount(response.data.totalCount); });    
    }

    onChangePage = (curPage) => {
        this.props.setPage(curPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${curPage}`)
            .then(response => { this.props.setUsers(response.data.items); });
    }
    
    render() { 
        return <Users users={this.props.users}
            totalCount={ this.props.totalCount }
            pageSize={ this.props.pageSize }
            currentPage={ this.props.currentPage }
            followed={ this.props.followed }
            unfollowed={ this.props.unfollowed }
            onChangePage={ this.onChangePage }
     /> }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
