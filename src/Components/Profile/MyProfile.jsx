import React from "react";
import style from './Profile.module.css';
import mainimage from './../../images/profile_headerImg.jpg';
import ContentProfile from "./ContentProfile/ContentProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const MyProfile = (props) => {
    debugger;
    return (
        <main className={style.app_main}>
            <div className={style.main_header}>
                <img src={mainimage} alt='main page' />
            </div>

            <div className={style.main_content}>
                <ContentProfile savePhoto={ props.savePhoto } isOwner={ props.isOwner } userInfo={ props.profile } status={ props.status } updateStatus={ props.updateStatus } />
                
                <MyPostsContainer />
            </div>
        </main>
    );
}

export default MyProfile;