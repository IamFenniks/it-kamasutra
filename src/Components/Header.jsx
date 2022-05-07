import React from "react";
import style from './Header.module.css'
import logo from './../images/cart.png';

const Header = () => {
    return (
        <header className={ style.app__header }>
            <img src={ logo } alt={ logo } className={ style.header___img } />

            <div className={ style.header___title }>
                <p>It-Camasutra &nbsp;
                    <span>Социальная сеть</span>
                </p>
            </div>
        </header>
    );
}

export default Header;