import axios from 'axios';
import React from 'react';
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux';
import Profile from './Profile';
import { addUserProfile } from '../../redux/profileReduser';
import { toggleFetching } from '../../redux/commonReduser'
import Preloader from '../Common/Preloader';
import { ProfileAPI } from '../../api/api';

export function withRouter(Children){
    
    return(props)=>{

       let match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class ProfileContainer extends React.Component {
    componentDidMount() {
        // debugger
        this.props.toggleFetching(true);
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        ProfileAPI.getUserProfile(userId)
            .then(data => {
                // debugger
                this.props.toggleFetching(false);
                this.props.addUserProfile(data) 
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

let UrlContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { addUserProfile, toggleFetching }) (UrlContainer);