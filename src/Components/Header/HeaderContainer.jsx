import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, isAuthThC, logoutThC } from '../../redux/authReduser';
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.isAuthThC();
        this.props.logoutThC();
    }

    render () {
        return <Header { ...this.props } />
    }
}

let mapStateToProps = (state) => {
    // debugger;
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login // Здесь я допустил ошибку login: state.auth.userData.login
    }
}

export default connect(mapStateToProps, { setAuthUserData, isAuthThC, logoutThC })(HeaderContainer);