import React from "react";
import style from './Profile.module.css';
import mainimage from './../../images/profile_headerImg.jpg';
import ContentProfile from "./ContentProfile/ContentProfile";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <main className={style.app_main}>
            <div className={style.main_header}>
                <img src={mainimage} alt='main page' />
            </div>

            <div className={style.main_content}>
                <ContentProfile />
                <MyPosts 
                    posts={ props.profilePage.postData } 
                    newPostText={ props.profilePage.newPostText }
                    updateNewPostText={ props.updateNewPostText }
                    addPost={ props.addPost } />
            </div>
        </main>
    );
}

export default Profile;