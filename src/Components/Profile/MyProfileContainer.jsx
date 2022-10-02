import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getMyProfThC, getUserStatusThC, updateStatusThC } from '../../redux/profileReduser';
import Preloader from '../Common/Preloader';
import { WithAuthRedirect } from '../Hoc/WithAuthRedirect';
import { compose } from 'redux';

class MyProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getMyProfThC();
        this.props.getUserStatusThC(25073)
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
    connect(mapStateToProps, { getMyProfThC, getUserStatusThC, updateStatusThC }),
    WithAuthRedirect
)
    (MyProfileContainer);