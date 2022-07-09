import React from "react";
import style from './Profile.module.css';
import mainimage from './../images/histuqua.jpg';
import profilePNG from './../images/profile.png';

const Profile = () => {
    return (
        <main className={style.app__main}>
            <div className={style.main___header}>
                <img src={mainimage} alt='main page' />
            </div>

            <div className={style.main___content}>
                <div className={style.content___profile}>
                    <img src={ profilePNG } alt='profile image' />
                    <div className={style.profile}>
                        <div className={style.profile__table}>
                            <div className={style.table__row}>
                                <div className={style.table__name}>Дата рождения:</div>
                                <div className={style.table__value}>14.01.1972</div>
                            </div>
                           
                            <div className={style.table__row}>
                                <div className={style.table__name}>Город:</div>
                                <div className={style.table__value}>Володарское</div>
                            </div>
                           
                            <div className={style.table__row}>
                                <div className={style.table__name}>Образование:</div>
                                <div className={style.table__value}>Средне-специальное</div>
                            </div>
                           
                            <div className={style.table__row}>
                                <div className={style.table__name}>Web-сайт:</div>
                                <div className={style.table__value}>https:olmark-onlinemarket.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.content___articles}>
                    <h3>Мои статьи</h3>
                    <div className={style.article}>
                        <div className={style.ava}>1</div>
                        <div className={style.article_text}>
                            <p>Это статья номер 1</p>
                        </div>
                    </div>
                    <div className={style.article}>
                        <div className={style.ava}>2</div>
                        <div className={style.article_text}>
                            <p>Это статья номер 2</p>
                        </div>
                    </div>
                    <div className={style.article}>
                        <div className={style.ava}>3</div>
                        <div className={style.article_text}>
                            <p>Это статья номер 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;