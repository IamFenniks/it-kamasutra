import React from "react";
import { connect } from "react-redux";
import { loginAPI } from "../../api/api";
import { setAuthUserData } from '../../redux/authReduser';
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        loginAPI.auth()
            .then(data => {
                // debugger
               if(data.resultCode === 0){
                    let {email, id, login} = data.data;
                    this.props.setAuthUserData(email, id, login); 
               }
            });
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);