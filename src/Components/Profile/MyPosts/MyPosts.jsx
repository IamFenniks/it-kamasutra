import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReduser";
import Post from "./MyPost/Post";
import style from './MyPosts.module.css';

const MyPosts = (props) => {
    
    let postElement = props.posts.map( (p, index) => <Post key={index} postText={p.text} id={p.id} />);
    
    let onAddPost = () => { 
        props.addPost();
    };

    let onPostsChange = (e) => {
        let postText = e.target.value;
        props.updateNewPostText(postText);
    }
    // debugger;
    return (
        <div className={style.my_posts}>
            <h3>Мои статьи</h3>

            <div className={style.btn_group}>
                <div>
                    <textarea
                        onChange={ onPostsChange }
                        value={ props.newPostText } 
                        placeholder="Написать статью..." />
                </div>
                <div>
                    <button type='submit' onClick={ onAddPost }>Отправить</button>
                </div>
            </div>
            { postElement }
        </div>
    );
}

export default MyPosts;