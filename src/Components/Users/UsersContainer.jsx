import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsersThC, setCurrentPage, setTotalCount, setUsers, unfollow } from '../../redux/usersReduser';
import { toggleFetching, toggleDisable } from '../../redux/commonReduser';
import Users from './Users';
import Preloader from '../Common/Preloader';
import { fllowedAPI, userAPI } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThC(this.props.pageSize, this.props.currentPage);
        // this.props.toggleFetching(true);

        // userAPI.getUsers(this.props.pageSize, this.props.currentPage)
        //     .then(data => { this.props.toggleFetching(false); 
        //                     this.props.setUsers(data.items);
        //                     this.props.setTotalCount(data.totalCount); 
        //                 });    
    }

    onChangePage = (curPage) => {
        this.props.getUsersThC(this.props.pageSize, curPage);
        // this.props.setCurrentPage(curPage)
        // this.props.toggleFetching(true);
        
        // userAPI.getUsers(this.props.pageSize, curPage)
        //     .then(data => { this.props.toggleFetching(false); 
        //                     this.props.setUsers(data.items); });
    }
    onUnfollow = (userId) => {
        this.props.toggleDisable(true, userId);
        fllowedAPI.unfollow(userId)
            .then(data => { 
                // debugger
                if(data.resultCode == 0) {
                    this.props.unfollow(userId)
                }
                this.props.toggleDisable(false, userId); 
        });
    }
    onFollow = (userId) => {
        this.props.toggleDisable(true, userId);
        fllowedAPI.follow(userId)
            .then(data => { 
                // debugger
                if(data.resultCode == 0) {
                    this.props.follow(userId)
                }
                this.props.toggleDisable(false, userId);
            });  
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
    { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleFetching, toggleDisable, getUsersThC })
    (UsersContainer);
