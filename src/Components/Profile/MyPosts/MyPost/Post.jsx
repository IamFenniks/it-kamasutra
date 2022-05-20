import React from "react";
import style from './../MyPosts.module.css';

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

export default Post;
