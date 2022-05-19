import React from "react";
import style from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={style.my_posts}>
            <h3>Мои статьи</h3>
            <div className={style.post}>
                <div className={style.ava}>1</div>
                <div className={style.post_text}>
                    <p>Это статья номер 1</p>
                </div>
            </div>
            <div className={style.post}>
                <div className={style.ava}>2</div>
                <div className={style.post_text}>
                    <p>Это статья номер 2</p>
                </div>
            </div>
            <div className={style.post}>
                <div className={style.ava}>3</div>
                <div className={style.post_text}>
                    <p>Это статья номер 3</p>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;