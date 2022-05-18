import React from "react";
import { Link } from "react-router-dom";
import style from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={style.app_sidebar}>
            <nav>
                <div><Link to='profile' activ>Профиль</Link></div>
                <div><Link to='dialogs' activ>Диалоги</Link></div>
                <div><Link to='music' activ>Музыка</Link></div>
                <div><Link to='news' activ>Новости</Link></div>
            </nav>
        </div>
    );
}

export default Sidebar;