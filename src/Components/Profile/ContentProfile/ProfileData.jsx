import React from "react";
import style from './ContentProfile.module.css';

const ProfileData = (props) => {
    // debugger;
    return (
        <div className={style.profile}>
            <div className={style.profile_table}>
                <div className={style.table_column}>
                    <h4>Обо мне:</h4>

                    <div className={style.table_row}>
                        <div className={style.td_name}>Имя:</div>
                        <div className={style.td_value}>{props.userInfo.fullName}</div>
                    </div>

                    <div className={style.table_row}>
                        <div className={style.td_name}>Кто я:</div>
                        <div className={style.td_value}>{props.userInfo.aboutMe}</div>
                    </div>

                    <div className={style.table_row}>
                        <div className={style.td_name}>Статус поиска работы:</div>
                        <div className={style.td_value}>{
                            props.userInfo.lookingForAJob ? 'Ищу' : 'Не ищу'}
                        </div>
                    </div>

                    <div className={style.table_row}>
                        <div className={style.td_name}>Навыки:</div>
                        <div className={style.td_value}>{props.userInfo.lookingForAJobDescription}</div>
                    </div>
                </div>

                <div className={style.table_column}>
                    <h4>Мои контакты:</h4>
                    {Object.keys(props.userInfo.contacts).map((key) => {
                        if (!props.userInfo.contacts[key]) return props.userInfo.contacts[key] = <span key={key} className={style.warning} >Не установлено</span>
                        return <Contact key={key} contactTitle={key} contactValue={props.userInfo.contacts[key]} />
                    })
                    }
                </div>
            </div>

            {props.isOwner &&
                <div className={ style.editBtn }>
                    <button onClick={() => { props.setEditMode(true) }}>Редактировать</button>
                </div>
            }
        </div>
    )
}
// debugger;
const Contact = ({ key, contactTitle, contactValue }) => {
    return (
        <div key={ key } className={style.table_row}>
            <div className={style.td_name}>{contactTitle}: </div> <div className={style.td_value}>{contactValue}</div>
        </div>
    )
}

export default ProfileData;