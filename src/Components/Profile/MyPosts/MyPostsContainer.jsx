import React from "react";
import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (postText) => {
            let action = updateNewPostTextAC(postText);
            dispatch( action );
        },
        addPost: () => {
            let action = addPostAC();
            dispatch( action );
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;