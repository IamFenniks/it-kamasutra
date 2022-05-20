import React from "react";
import Post from "./MyPost/Post";
import style from './MyPosts.module.css';

const MyPosts = (props) => {
    
    let postElement = props.postData.map( (p, index) => <Post key={index} postText={p.text} id={p.id} />);

    return (
        <div className={style.my_posts}>
            <h3>Мои статьи</h3>

            { postElement }
        </div>
    );
}

export default MyPosts;