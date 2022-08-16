import React from 'react';
import { useParams} from 'react-router-dom'
import { connect } from 'react-redux';
import Profile from './Profile';
import { toggleFetching } from '../../redux/commonReduser';
import { getUserProfThC } from '../../redux/profileReduser';
import Preloader from '../Common/Preloader';
import { WithAuthRedirect } from '../Hoc/WithAuthRedirect';

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
        // debugger
        return <Profile { ...this.props } profile={ this.props.profile } />
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
    return { 
        profile: state.profilePage.userProfile,
        isFetching: state.common.isFetching
    }
}

let UrlContainer = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfThC, toggleFetching }) (UrlContainer);