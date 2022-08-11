import React from "react";
import { connect } from "react-redux";
import { loginAPI } from "../../api/api";
import { setAuthUserData, isAuthThC } from '../../redux/authReduser';
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.isAuthThC();
    }

    render () {
        return <Header { ...this.props } />
    }
}

let mapStateToProps = (state) => {
    // debugger
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.userData.login
    }
}

export default connect(mapStateToProps, { setAuthUserData, isAuthThC })(HeaderContainer);