import React from 'react';
import { connect } from 'react-redux';
import { getUsersThC, unfollowThC, followThC } from '../../redux/usersReduser';
import Users from './Users';
import Preloader from '../Common/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThC(this.props.pageSize, this.props.currentPage);
    }

    onChangePage = (curPage) => {
        this.props.getUsersThC(this.props.pageSize, curPage);
    }
    onUnfollow = (userId) => {
        this.props.unfollowThC(userId)
    }
    onFollow = (userId) => {
        this.props.followThC(userId)  
    }
    
    render() { 
        // debugger
            return <>
                    { this.props.isFetching ? <Preloader /> : null }
                    
                    <Users users={this.props.users}
                        totalCount={ this.props.totalCount }
                        pageSize={ this.props.pageSize }
                        currentPage={ this.props.currentPage }
                        followBtnDisabled={this.props.followBtnDisabled}
                        onFollow={ this.onFollow }
                        onUnfollow={ this.onUnfollow }
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
        isFetching: state.common.isFetching,
        followBtnDisabled: state.common.followBtnDisabled
    }
}

export default connect(mapStateToProps, 
    { followThC, unfollowThC, getUsersThC })
    (UsersContainer);
