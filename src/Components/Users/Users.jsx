import React from "react";
import style from "./Users.module.css"
import userPhoto from "./../../images/users.png"
import { NavLink } from "react-router-dom";


const Users = (props) => {
    let pageSize = Math.ceil (props.totalCount / props.pageSize);
    let pages = [];
    for(let i=1; i<=pageSize; i++){
        pages.push(i);
    }
    return (
        <main className={ style.users }>
            <div className={ style.users_header }>
                <h2>Пользователи</h2>
                <div className={ style.pagination }>
                    {
                        pages.map((p, index) => { 
                            if(index < 10) {
                                return (
                                    <span onClick={ (e) => { props.onChangePage(p) } }
                                        className={props.currentPage === p && style.active}
                                        key={index}>
                                            {p}
                                    </span>
                                )
                            }
                        })    
                    }
                    
                </div>
            </div>

            {
                props.users.map(u => <div key={u.id} className={style.user_element}>
                    <div className={style.left_side}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto } alt="user avtar" />
                        </NavLink>
                        
                        { u.followed 
                            ? <button onClick={ (e) => { props.onUnfollow(u.id) }}
                                      disabled={ props.followBtnDisabled.some(id => id === u.id) }>
                                Unfollow
                            </button>

                            : <button onClick={ (e) => { props.onFollow(u.id) }}
                                      disabled={ props.followBtnDisabled.some(id => id === u.id) }>
                                Follow
                            </button> 
                        }
                    </div>

                    <div className={style.rigth_side}>
                        <div>
                            <p>
                                <NavLink to={'/profile/' + u.id}>
                                    <b><i>Имя:</i></b> {u.name}
                                </NavLink>
                            </p>
                            <p><b><i>Статус:</i></b> {u.status}</p>
                        </div>
                        <div>
                            <p><b><i>Страна:</i></b> {"u.location.country"}</p>
                            <p><b><i>Город:</i></b> {"u.location.city"}</p>
                        </div>
                    </div>
                </div>
                )
            }
        </main>
    )  
}

export default Users;
