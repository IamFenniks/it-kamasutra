import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    // debugger;
    let state = props.store.getState();

    let addPost = () => { 
        let action = addPostAC();
        props.store.dispatch( action );
    };

    let onPostsChange = (postText) => {
        let action = updateNewPostTextAC(postText);
        props.store.dispatch( action );
    }

    return (<MyPosts updateNewPostText={ onPostsChange } 
                     addPost={ addPost } 
                     posts={ state.profilePage.postData }
                     newPostText={ state.profilePage.newPostText } />);
}

export default MyPostsContainer;