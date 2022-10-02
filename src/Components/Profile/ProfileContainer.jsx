import React from 'react';
import { useParams} from 'react-router-dom'
import { connect } from 'react-redux';
import Profile from './Profile';
import { toggleFetching } from '../../redux/commonReduser';
import { getUserProfThC, getUserStatusThC, updateStatusThC } from '../../redux/profileReduser';
import Preloader from '../Common/Preloader';
import { WithAuthRedirect } from '../Hoc/WithAuthRedirect';
import { compose } from 'redux';

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
        if(!userId) userId = 25073;

        this.props.getUserProfThC(userId);
        this.props.getUserStatusThC(userId);
    }

    render() {
        if(!this.props.profile) return  <Preloader />
        // debugger
        return <Profile { ...this.props } profile={ this.props.profile } status={ this.props.status } updateStatus={ this.props.updateStatusThC } />
    }
}

let mapStateToProps = (state) => {
    return { 
        profile: state.profilePage.userProfile,
        isFetching: state.common.isFetching,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfThC, toggleFetching, getUserStatusThC, updateStatusThC }),
    withRouter
)(ProfileContainer)


