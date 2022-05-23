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
                <MyPosts postData={ props.state.postData } addPost={ props.addPost } />
            </div>
        </main>
    );
}

export default Profile;