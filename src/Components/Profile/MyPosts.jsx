import React from "react";
import style from './MyPosts.module.css';

const MyPosts = () => {
    const Post = (props) => {
        return (
            <div className={style.post}>
                <div className={style.ava}>{ props.id }</div>
                <div className={style.post_text}>
                    <p>{ props.postText }</p>
                </div>
            </div>
        );
    }

    // BLL Start
    let postData = [
        { id: 0, text: 'Это статья номер 1' },
        { id: 1, text: 'Это статья номер 2' },
        { id: 2, text: 'Это статья номер 3' }
    ];

    let postElement = postData.map( p => <Post postText={p.text} id={p.id} />);
    // BLL Finish

    return (
        <div className={style.my_posts}>
            <h3>Мои статьи</h3>

            { postElement }
        </div>
    );
}

export default MyPosts;