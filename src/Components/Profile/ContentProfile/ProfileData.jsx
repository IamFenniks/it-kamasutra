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
                        <div className={style.td_value}>{props.profile.fullName}</div>
                    </div>

                    <div className={style.table_row}>
                        <div className={style.td_name}>Кто я:</div>
                        <div className={style.td_value}>{props.profile.aboutMe}</div>
                    </div>

                    <div className={style.table_row}>
                        <div className={style.td_name}>Статус поиска работы:</div>
                        <div className={style.td_value}>{
                            props.profile.lookingForAJob ? 'Ищу' : 'Не ищу'}
                        </div>
                    </div>

                    <div className={style.table_row}>
                        <div className={style.td_name}>Навыки:</div>
                        <div className={style.td_value}>{props.profile.lookingForAJobDescription}</div>
                    </div>
                </div>

                <div className={style.table_column}>
                    <h4>Мои контакты:</h4>
                    {Object.keys(props.profile.contacts).map((contact, index) => {
                        if (!props.profile.contacts[contact]) return props.profile.contacts[contact] = <span key={index} className={style.warning} >Не установлено</span>
                            return <Contact key={index} contactTitle={contact} contactValue={props.profile.contacts[contact]} />
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
const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={style.table_row}>
            <div className={style.td_name}>{contactTitle}: </div> <div className={style.td_value}>{contactValue}</div>
        </div>
    )
}

export default ProfileData;