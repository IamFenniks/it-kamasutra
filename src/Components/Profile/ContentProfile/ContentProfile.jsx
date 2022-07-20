import React from "react";
import style from './ContentProfile.module.css';
import profilePNG from './../../../images/profile.png';

const ContentProfile = (props) => {
    // debugger
    return (
        <div className={style.content_profile}>
            <img src={ props.userInfo.photos.small === null ? profilePNG : props.userInfo.photos.small} alt='profile image' />
            
            <div className={style.profile}>
                <div className={style.profile_table}>
                    <div className={style.table_row}>
                        <div className={style.table_name}>Имя:</div>
                        <div className={style.table_value}>{ props.userInfo.fullName }</div>
                    </div>
                    
                    <div className={style.table_row}>
                        <div className={style.table_name}>Обо мне:</div>
                        <div className={style.table_value}>{ props.userInfo.aboutMe }</div> 
                    </div>
                    
                    <div className={style.table_row}>
                        <div className={style.table_name}>Статус поиска работы:</div>
                        <div className={style.table_value}>{ 
                            props.userInfo.lookingForAJob ? 'Ищу' : 'Не ищу' }
                        </div>
                    </div>
                    
                    { props.userInfo.lookingForAJob &&
                        <div className={style.table_row}>
                            <div className={style.table_name}>Описание:</div>
                            <div className={style.table_value}>{ props.userInfo.lookingForAJobDescription }</div>
                        </div>
                    }

                    <div className={style.table_row}>
                        <div className={style.table_name}>Мои контакты:</div>
                        <div className={style.table_value}>
                            { props.userInfo.contacts.facebook &&  <div className={style.table_row}><div className={style.table_name}>Фейсбук: </div>   <div className={style.table_value}>{ props.userInfo.contacts.facebook }</div>  </div> }
                            { props.userInfo.contacts.website &&   <div className={style.table_row}><div className={style.table_name}>website: </div>   <div className={style.table_value}>{ props.userInfo.contacts.website }</div>   </div> }
                            { props.userInfo.contacts.vk &&        <div className={style.table_row}><div className={style.table_name}>vk: </div>        <div className={style.table_value}>{ props.userInfo.contacts.vk }</div>        </div> }
                            { props.userInfo.contacts.twitter &&   <div className={style.table_row}><div className={style.table_name}>twitter: </div>   <div className={style.table_value}>{ props.userInfo.contacts.twitter }</div>   </div> }
                            { props.userInfo.contacts.instagram && <div className={style.table_row}><div className={style.table_name}>instagram: </div> <div className={style.table_value}>{ props.userInfo.contacts.instagram }</div> </div> }
                            { props.userInfo.contacts.youtube &&   <div className={style.table_row}><div className={style.table_name}>youtube: </div>   <div className={style.table_value}>{ props.userInfo.contacts.youtube }</div>   </div> }
                            { props.userInfo.contacts.github &&    <div className={style.table_row}><div className={style.table_name}>github: </div>    <div className={style.table_value}>{ props.userInfo.contacts.github }</div>    </div> }
                            { props.userInfo.contacts.mainLink &&  <div className={style.table_row}><div className={style.table_name}>mainLink: </div>  <div className={style.table_value}>{ props.userInfo.contacts.mainLink }</div>  </div> }
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default ContentProfile;