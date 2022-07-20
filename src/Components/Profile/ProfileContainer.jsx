import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { addUserProfile } from '../../redux/profileReduser';
import { toggleFetching } from '../../redux/commonReduser'
import Preloader from '../Common/Preloader';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/8')
            .then(response => {
                // debugger
                this.props.toggleFetching(false);
                this.props.addUserProfile(response.data) 
            }
        );
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

export default connect(mapStateToProps, { addUserProfile, toggleFetching }) (ProfileContainer);