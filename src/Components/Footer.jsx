import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.app__footer}>
            <div className={style.footer___left} >Приложение разработано на React.js</div>
            <div className={style.footer___right} >Все права защищены &copy; 2022</div>
        </footer>
    );
}

export default Footer;