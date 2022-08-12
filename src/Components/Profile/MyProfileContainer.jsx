import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getMyProfThC } from '../../redux/profileReduser';
import Preloader from '../Common/Preloader';

class MyProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getMyProfThC();
    }

    render() {
        if(!this.props.profile) return  <Preloader /> 
        // debugger
        return <Profile { ...this.props } profile={ this.props.profile } />
    }
}

let mapStateToProps = (state) => {
    return { 
        profile: state.profilePage.userProfile,
        isFetching: state.common.isFetching
    } 
}
export default connect(mapStateToProps, { getMyProfThC }) (MyProfileContainer);