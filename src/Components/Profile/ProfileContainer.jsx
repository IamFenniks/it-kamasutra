import React from 'react';
import {Navigate, useParams} from 'react-router-dom'
import { connect } from 'react-redux';
import Profile from './Profile';
import { toggleFetching } from '../../redux/commonReduser';
import { getUserProfThC } from '../../redux/profileReduser';
import Preloader from '../Common/Preloader';

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

        this.props.getUserProfThC(userId); 
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

let UrlContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfThC, toggleFetching }) (UrlContainer);