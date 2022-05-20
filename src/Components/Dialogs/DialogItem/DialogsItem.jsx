import React from "react";
import style from './../Dialogs.module.css';

    const DialogItem = (props) => {
        return (
            <div className={style.item}><p>{ props.message }</p></div>
        );
    }

export default DialogItem;