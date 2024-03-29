import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, logoutThC } from '../../redux/redusers/authReduser';
import Header from "./Header";

class HeaderContainer extends React.Component {
    render () {
        return <Header { ...this.props } />
    }
}

let mapStateToProps = (state) => {
    // debugger;
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login // Здесь я допустил ошибку login: state.auth.userData.login
     // ключ:  state.(redux-store ключ).(alikeReduser ключ)
    }
}

export default connect(mapStateToProps, { setAuthUserData, logoutThC })(HeaderContainer);