import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalCount, setUsers, unfollow } from '../../redux/usersReduser';
import { toggleFetching } from '../../redux/commonReduser';
import Users from './Users';
import Preloader from '../Common/Preloader';
import { userAPI } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);

        userAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => { this.props.toggleFetching(false); 
                            this.props.setUsers(data.items);
                            this.props.setTotalCount(data.totalCount); 
                        });    
    }

    onChangePage = (curPage) => {
        this.props.setCurrentPage(curPage)
        this.props.toggleFetching(true);
        
        userAPI.getUsers(this.props.pageSize, curPage)
            .then(data => { this.props.toggleFetching(false); 
                            this.props.setUsers(data.items); });
    }
    
    render() { 
        // debugger
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
        isFetching: state.common.isFetching
    }
}

export default connect(mapStateToProps, 
    { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleFetching })
    (UsersContainer);
