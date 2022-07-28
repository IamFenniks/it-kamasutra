import React from "react";
import style from "./Users.module.css"
import userPhoto from "./../../images/users.png"
import { NavLink } from "react-router-dom";
import axios from "axios";


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
                            ? <button onClick={ () => { 
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '4c541e25-0538-45bc-b14f-040beb1df540'
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                    }); 
                            } }>Unfollow</button>

                            : <button onClick={ () => { 
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '4c541e25-0538-45bc-b14f-040beb1df540'
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                    });  } }>Follow</button> 
                        }
                        
                    </div>

                    <div className={style.rigth_side}>
                        <div>
                            <p><b><i>Имя:</i></b> {u.name}</p>
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
