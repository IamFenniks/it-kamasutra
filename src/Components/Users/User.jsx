import React from "react";
import style from "./Users.module.css"
import userPhoto from "./../../images/users.png"
import { NavLink } from "react-router-dom";
import TopPaginator from "../Common/pagination/TopPaginator";


const User = (props) => {
    let user = props.user;
    return (
        <div key={props.id} className={style.user_element}>
            <div className={style.left_side}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto } alt="user avtar" />
                </NavLink>
                
                { user.followed 
                    ? <button onClick={ (e) => { props.onUnfollow(user.id) }}
                                disabled={ props.followBtnDisabled.some(id => id === user.id) }>
                        Unfollow
                    </button>

                    : <button onClick={ (e) => { props.onFollow(user.id) }}
                                disabled={ props.followBtnDisabled.some(id => id === user.id) }>
                        Follow
                    </button> 
                }
            </div>

            <div className={style.rigth_side}>
                <div>
                    <p>
                        <NavLink to={'/profile/' + user.id}>
                            <b><i>Имя:</i></b> {user.name}
                        </NavLink>
                    </p>
                    <p><b><i>Статус:</i></b> {user.status}</p>
                </div>
                <div>
                    <p><b><i>Страна:</i></b> {"user.location.country"}</p>
                    <p><b><i>Город:</i></b> {"user.location.city"}</p>
                </div>
            </div>
        </div>
    )  
}

export default User;
