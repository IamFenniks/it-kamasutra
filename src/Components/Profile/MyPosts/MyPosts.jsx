import React from "react";
import Post from "./MyPost/Post";
import style from './MyPosts.module.css';

const MyPosts = (props) => {
    
    let postElement = props.postData.map( (p, index) => <Post key={index} postText={p.text} id={p.id} />);
    let newPostElement = React.createRef();
    let addPost = () => { 
        let postText = newPostElement.current.value;
        alert(postText);
    };

    return (
        <div className={style.my_posts}>
            <h3>Мои статьи</h3>

            <div className={style.btn_group}>
                <div><textarea ref={ newPostElement } placeholder="Текст..."></textarea></div>
                <div><button type='submit' onClick={ addPost }>OK</button></div>
            </div>
            { postElement }
        </div>
    );
}

export default MyPosts;