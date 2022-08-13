import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getMyProfThC } from '../../redux/profileReduser';
import Preloader from '../Common/Preloader';
import { Navigate } from 'react-router-dom';

class MyProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getMyProfThC();
    }

    render() {
        if(!this.props.profile) return  <Preloader />
        if(!this.props.isAuth) return <Navigate to='/login' />
        // debugger
        return <Profile { ...this.props } profile={ this.props.profile } />
    }
}

let mapStateToProps = (state) => {
    return { 
        profile: state.profilePage.userProfile,
        isFetching: state.common.isFetching,
        isAuth: state.auth.isAuth
    } 
}
export default connect(mapStateToProps, { getMyProfThC }) (MyProfileContainer);