import React from "react";
import style from "./Users.module.css"

const Users = (props) => {
        props.setUsers ([
            { 
                id: 0,
                followed: true,
                userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOa31A3Sstz7vDPuZQ_Q0exSI9K6oKIVtig&usqp=CAU',
                name: 'Андрей',
                status: 'Команда',
                location: { country: 'Россия' , city: 'Мариуполь' } 
            },
            { 
                id: 1,
                followed: false,
                userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZC5LyXIKd6CkjtmgegFMd5qpCPhy22gGWzA&usqp=CAU',
                name: 'Иван',
                status: 'Команда',
                location: { country: 'Россия' , city: 'Мариуполь' } 
            },
            { 
                id: 2,
                followed: true,
                userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKvGaF13ty4bRwZmOTGf4mkwBEIx85bLK9A&usqp=CAU',
                name: 'Марья',
                status: 'Команда',
                location: { country: 'Россия' , city: 'Мариуполь' } 
            },
            { 
                id: 3,
                followed: true,
                userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKvGaF13ty4bRwZmOTGf4mkwBEIx85bLK9A&usqp=CAU',
                name: 'Марья',
                status: 'Команда',
                location: { country: 'Россия' , city: 'Мариуполь' } 
            }
        ])

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
