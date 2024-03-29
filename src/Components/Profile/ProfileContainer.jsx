import React from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import Profile from './Profile';
import { toggleFetching } from '../../redux/redusers/commonReduser';
import { getUserProfThC, getUserStatusThC } from '../../redux/redusers/profileReduser';
import Preloader from '../Common/Preloader';
import { compose } from 'redux';

/* 
*  Сейчас используется другое вместро withRouter, 
*  а именно хук useParams()
*  https://reactrouter.com/en/v6.3.0/api#useparams
* 
*  withRouter - считывает Адрес в адресной строке браузера
*  Адресная ср-ка это, своего рода state - истина
*  И мы можем выполнтяь некие действ. в соответствии с ней
*/

export function withRouter(Children){
    return(props)=>{
       let match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

 window.props = [];

class ProfileContainer extends React.Component {
    refreshProfile() {
        this.props.toggleFetching(true);
            
        let userId = this.props.match.params.userId;
        if(!userId) userId = this.props.authorizedUserId;
    
        this.props.getUserProfThC(userId);
        this.props.getUserStatusThC(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // debugger
        return nextProps !== this.props || nextState !== this.state;
    }


    render() {
        window.props.push(this.props);
        console.log(this.props); 
        console.log('Render'); 

        if(!this.props.profile) return  <Preloader />
        //debugger
        return <Profile { ...this.props } profile={ this.props.profile } status={ this.props.status } />
    }
}

let mapStateToProps = (state) => {
    return { 
        // ключ:  state.(redux-store ключ).(alikeReduser ключ)
        profile: state.profilePage.userProfile, 
        isFetching: state.common.isFetching,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfThC, toggleFetching, getUserStatusThC }),
    withRouter
)(ProfileContainer)
