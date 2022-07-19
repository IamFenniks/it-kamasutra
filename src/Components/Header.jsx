import React from "react";
import style from './Header.module.css'
import logo from './../images/logo.png';

const Header = () => {
    return (
        <header className={ style.app_header }>
            <img src={ logo } alt='Логотип' className={ style.headerImg } />

            <div className={ style.header_title }>
                <p>It-Camasutra &nbsp;
                    <span>Социальная сеть</span>
                </p>
            </div>
        </header>
    );
}

export default Header;