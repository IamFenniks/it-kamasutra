import React from "react";
import style from './ContentProfile.module.css';
import profilePNG from './../../../images/profile.png';

const ContentProfile = () => {
    return (
        <div className={style.content_profile}>
            <img src={ profilePNG } alt='profile image' />
            
            <div className={style.profile}>
                <div className={style.profile_table}>
                    <div className={style.table_row}>
                        <div className={style.table_name}>Дата рождения:</div>
                        <div className={style.table_value}>14.01.1972</div>
                    </div>
                    
                    <div className={style.table_row}>
                        <div className={style.table_name}>Город:</div>
                        <div className={style.table_value}>Володарское</div>
                    </div>
                    
                    <div className={style.table_row}>
                        <div className={style.table_name}>Образование:</div>
                        <div className={style.table_value}>Средне-специальное</div>
                    </div>
                    
                    <div className={style.table_row}>
                        <div className={style.table_name}>Web-сайт:</div>
                        <div className={style.table_value}>https:olmark-onlinemarket.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentProfile;