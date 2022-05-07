import React from "react";
import style from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <sidebar className={style.app__sidebar}>
            <nav>
                <div><a href='#s'>My posts</a></div>
                <div><a href='#s'>Friends posts</a></div>
                <div><a href='#s'>Messages</a></div>
                <div><a href='#s'>Callbacks</a></div>
            </nav>
        </sidebar>
    );
}

export default Sidebar;