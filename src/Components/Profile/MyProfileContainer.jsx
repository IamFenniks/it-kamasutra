import React from 'react';
import { connect } from 'react-redux';
import MyProfile from './MyProfile';
import { getMyProfThC, savePhotoThC, getUserStatusThC, updateStatusThC, saveProfDataThC } from '../../redux/redusers/profileReduser';
import Preloader from '../Common/Preloader';
import { WithAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from './ProfileContainer';

class MyProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getMyProfThC();
        this.props.getUserStatusThC(25073);
    }

    render() {
        if(!this.props.profile) return  <Preloader />
        // debugger
        return <MyProfile 
            { ...this.props } 
            isOwner={ !this.props.match.params.userId } // Если на страничке пол-ля нет айдишки, то это Я
            profile={ this.props.profile } 
            status={ this.props.status } 
            savePhoto={ this.props.savePhotoThC }
            updateStatus={ this.props.updateStatusThC }
            onSubmit={this.props.saveProfDataThC} />
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
    connect(mapStateToProps, { getMyProfThC, savePhotoThC, getUserStatusThC, updateStatusThC, saveProfDataThC }),
    withRouter,
    WithAuthRedirect
)
    (MyProfileContainer);