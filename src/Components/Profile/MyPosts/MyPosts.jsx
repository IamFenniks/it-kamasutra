import React from "react";
import Post from "./MyPost/Post";
import style from './MyPosts.module.css';

const MyPosts = (props) => {
    
    let postElement = props.posts.map( (p, index) => <Post key={index} postText={p.text} id={p.id} />);
    
    let newPostElement = React.createRef();
    let addPost = () => { 
        props.addPost();
    };

    let onPostsChange = () => {
        let postText = newPostElement.current.value;
        props.updateNewPostText(postText);
    }

    return (
        <div className={style.my_posts}>
            <h3>Мои статьи</h3>

            <div className={style.btn_group}>
                <div>
                    <textarea 
                        ref={ newPostElement }
                        onChange={ onPostsChange }
                        value={ props.newPostText } 
                        placeholder="Текст..." />
                </div>
                <div>
                    <button type='submit' onClick={ addPost }>OK</button>
                </div>
            </div>
            { postElement }
        </div>
    );
}

export default MyPosts;