import React from 'react';
import { connect } from 'react-redux';
import MyProfile from './MyProfile';
import { getMyProfThC, getUserStatusThC, updateStatusThC } from '../../redux/redusers/profileReduser';
import Preloader from '../Common/Preloader';
import { WithAuthRedirect } from '../Hoc/WithAuthRedirect';
import { compose } from 'redux';

class MyProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getMyProfThC();
        this.props.getUserStatusThC(25073);
    }

    render() {
        if(!this.props.profile) return  <Preloader />
        // debugger
        return <MyProfile { ...this.props } profile={ this.props.profile } status={ this.props.status } updateStatus={ this.props.updateStatusThC } />
    }
}

let mapStateToProps = (state) => {
    return {                                    // До селекторов
        profile: state.profilePage.userProfile, // ключ: state.(redux-store ключ).(alikeReduser ключ)
        isFetching: state.common.isFetching,
        status: state.profilePage.status
    } 
}

export default compose(
    connect(mapStateToProps, { getMyProfThC, getUserStatusThC, updateStatusThC }),
    WithAuthRedirect
)
    (MyProfileContainer);