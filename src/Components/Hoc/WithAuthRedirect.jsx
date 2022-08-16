import React from "react";
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    } 
}

export const WithAuthRedirect = (Componet) => {
    class RedirectComponent extends React.Component {
        render () {
            if(!this.props.isAuth) return <Navigate to='/login' />

            return <Componet {...this.props} />
        }
    }

    
    
let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectAuthRedirectComponent;
}
