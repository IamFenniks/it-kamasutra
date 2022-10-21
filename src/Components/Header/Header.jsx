import React from "react";
import style from './Header.module.css'
import logo from './../../images/logo.png';
import { Link } from "react-router-dom";

const Header = (props) => {
    // debugger
    return (
        <header className={ style.app_header }>
            <img src={ logo } alt='Логотип' className={ style.headerImg } />

            <div className={ style.header_title }>
                <p>It-Camasutra &nbsp;
                    <span>Социальная сеть</span>
                </p>
            </div>

            <div className={style.login}>
                { props.isAuth 
                    ? <div>{ props.login } - <button onClick={ props.logoutThC }>Выйти</button> </div>
                    : <Link to='/login'>Войти</Link> }
            </div>
        </header>
    );
}

export default Header;