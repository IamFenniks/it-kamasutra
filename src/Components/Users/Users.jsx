import axios from "axios";
import React from "react";
import style from "./Users.module.css"
import userPhoto from "./../../images/users.png"

const Users = (props) => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => { props.setUsers(response.data.items); })

        // props.setUsers ([
        //     { 
        //         id: 0,
        //         followed: true,
        //         userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOa31A3Sstz7vDPuZQ_Q0exSI9K6oKIVtig&usqp=CAU',
        //         name: 'Андрей',
        //         status: 'Команда',
        //         location: { country: 'Россия' , city: 'Мариуполь' } 
        //     }
        // ])

    return (
        <main className={style.users}>
            <h2>Пользователи</h2>

            {
                props.users.map(u => <div key={u.id} className={style.user_element}>
                    <div className={style.left_side}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } alt="user avtar" />
                        { u.followed 
                            ? <button onClick={ () => { props.unfollowed(u.id) } }>Follow</button> 
                            : <button onClick={ () => { props.followed(u.id) } }>Unfollow</button>
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
