import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { followAC, 
    setCurrentPageAC, 
    toggleFetchingAC, 
    setTotalCountAC, 
    setUsersAC, 
    unfollowAC 
} from "../../redux/usersReduser";
import Users from "./Users";
import Preloader from "../Common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => { this.props.toggleFetching(false); 
                                this.props.setUsers(response.data.items);
                                this.props.setTotalCount(response.data.totalCount); });    
    }

    onChangePage = (curPage) => {
        this.props.setPage(curPage)
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${curPage}`)
            .then(response => { this.props.toggleFetching(false); 
                                this.props.setUsers(response.data.items); });
    }
    
    render() { 
            return <>
                    { this.props.isFetching ? <Preloader /> : null }
                    
                    <Users users={this.props.users}
                        totalCount={ this.props.totalCount }
                        pageSize={ this.props.pageSize }
                        currentPage={ this.props.currentPage }
                        follow={ this.props.follow }
                        unfollow={ this.props.unfollow }
                        onChangePage={ this.onChangePage }
                    /> 
                </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
  
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId) => {
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
        },

        toggleFetching: (fetched) => {
            dispatch(toggleFetchingAC(fetched))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
