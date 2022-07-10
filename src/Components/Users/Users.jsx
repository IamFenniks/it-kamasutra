import React from "react";
import style from "./Users.module.css"
// debugger;
const Users = (props) => {
    return (
        <main className={style.users}>
            <h2>Пользователи</h2>

            {
                props.users.map(u => <div key={u.id} className={style.user_element}>
                    <div className={style.left_side}>
                        <img src={u.userImg} alt="user avtar" />
                        { u.followed 
                            ? <button onClick={ () => { props.unfollowed(u.id) } }>Follow</button> 
                            : <button onClick={ () => { props.followed(u.id) } }>Unfollow</button>
                        }
                        
                    </div>

                    <div className={style.rigth_side}>
                        <div>
                            <p>Имя: {u.name}</p>
                            <p>Статус: {u.status}</p>
                        </div>
                        <div>
                            <p>Страна: {u.location.country}</p>
                            <p>Город: {u.location.city}</p>
                        </div>
                    </div>
                </div>
                )
            }
        </main>
    )
}

export default Users;
