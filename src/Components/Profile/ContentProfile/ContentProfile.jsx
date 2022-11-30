import React, { useState } from "react";
import style from './ContentProfile.module.css';
import profilePNG from './../../../images/profile.png';
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const ContentProfile = (props) => {
    // debugger 
    let [ editMode, setEditMode ] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {               // Если есть в массиве хоть одно фото (length)
            props.savePhoto(e.target.files[0]);  // то мы его диспачим (вызываем-сохраняем) на серваке
        }
    }

    return (
        <div className={style.content_profile}>
            <div className={style.img_status}>
                <img src={props.userInfo.photos.small === null ? profilePNG : props.userInfo.photos.small} alt='profile image' />
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                {/* --- inner COMPONENT --- */}
                <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
            </div>

            { !editMode
                ? <ProfileData userInfo={ props.userInfo } isOwner={ props.isOwner } setEditMode={ setEditMode } />
                : <ProfileDataForm userInfo={ props.userInfo } setEditMode={ setEditMode }  onSubmit={props.saveProfDataThC} />
            }
        </div>
    );
}

export default ContentProfile;