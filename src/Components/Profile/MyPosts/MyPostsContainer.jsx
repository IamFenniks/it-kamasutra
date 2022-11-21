import React from "react";
import { connect } from "react-redux";
import { addPost, updateNewPostText } from "../../../redux/redusers/profileReduser";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    // debugger
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, { updateNewPostText, addPost }) (MyPosts);

export default MyPostsContainer;