import React from "react";
import { Link } from "react-router-dom";
import style from './../Dialogs.module.css';

// Inside Comps Start
    const DialogFriend = (props) => {
        return (
            <div className={style.friend}>
                <Link to={ '/dialogs/' + props.id }>
                    { props.name }
                </Link>
            </div>
        );
    }

export default DialogFriend;