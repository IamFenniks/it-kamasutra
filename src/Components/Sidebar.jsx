import React from "react";
import { Link } from "react-router-dom";
import style from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={style.app_sidebar}>
            <nav>
                <div><Link to='myprofile'>Мой профиль</Link></div>
                <div><Link to='dialogs'>Диалоги</Link></div>
                <div><Link to='music'>Музыка</Link></div>
                <div><Link to='news'>Новости</Link></div>
                <br />
                <div><Link to='users'>Пользователи</Link></div>
            </nav>
        </div>
    );
}

export default Sidebar;