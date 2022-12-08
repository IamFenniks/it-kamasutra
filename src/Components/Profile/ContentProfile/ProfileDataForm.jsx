import { useFormik } from "formik";
import React from "react";
import style from './ContentProfile.module.css';

const ProfileDataForm = (props) => {
    //  debugger;
    return (
        <div className={style.profile}>
            <FormikProfileData setEditMode={props.setEditMode} profile={props.profile} onSubmit={props.onSubmit} />
        </div>
    )
}

const FormikProfileData = (props) => {
    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            aboutMe: props.profile.aboutMe,
            picked: true,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            contacts: props.profile.contacts,
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.onSubmit(values, props.profile.userId);
            props.setEditMode(false);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={style.profile_table}>
                <div className={style.table_column}>
                    <h4>Обо мне:</h4>
                    <div className={style.table_row}>
                        <div className={style.td_name}>
                            <label htmlFor="fullName">Имя:</label>
                        </div>
                        <div className={style.td_value}>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.fullName || ''}
                            />
                        </div>
                    </div>

                    <div className={style.table_row}>
                        <div className={style.td_name}>
                            <label htmlFor="aboutMe">Обо мне:</label>
                        </div>
                        <div className={style.td_value}>
                            <input
                                id="aboutMe"
                                name="aboutMe"
                                type="text"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.aboutMe || ''}
                            />
                        </div>
                    </div>

                    <div className={style.table_row}>
                        <div className={style.td_name}>
                            <label htmlFor="email">Статус поиска работы:</label>
                        </div>
                        <div className={style.td_value}>
                            <label>
                                <input 
                                type="radio" 
                                name="picked"
                                onBlur={formik.handleBlur} 
                                value={true} 
                                onChange={formik.handleChange} />
                                Ищу
                            </label>
                            <label>
                                <input 
                                type="radio" 
                                name="picked"
                                onBlur={formik.handleBlur} 
                                value={false} 
                                onChange={formik.handleChange} />
                                Не ищу
                            </label>
                        </div>
                    </div>

                    <div className={style.table_row}>
                        <div className={style.td_name}>
                            <label htmlFor="lookingForAJobDescription">Навыки:</label>
                        </div>
                        <div className={style.td_value}>
                            <input 
                            name="lookingForAJobDescription"
                            id="lookingForAJobDescription"
                            component="textarea"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.lookingForAJobDescription || ''} />
                        </div>
                    </div>
                </div>

                <div className={style.table_column}>
                    <h4>Мои контакты:</h4>

                    {Object.keys(props.profile.contacts).map((contact, index) => {
                        return <div key={index} className={style.table_row}>
                            <div className={style.td_name}>
                                <label htmlFor={contact}>{contact}:</label>
                            </div> 
                            <div className={style.td_value}>
                                <input 
                                name={`contacts.${contact}`} 
                                id={contact} 
                                type="text" 
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={contact.value} />
                            </div>
                        </div>
                    })
                    }
                </div>
                <div className={style.editBtn}>
                    <button type="submit" >Сохранить</button>
                </div>
            </div>
        </form >
    );
}

export default ProfileDataForm;