import { Field, Form, Formik } from "formik";
import React from "react";
import style from './ContentProfile.module.css';

const ProfileDataForm = (props) => {
    //  debugger;
    return (
        <div className={style.profile}>
            <FormikProfileData setEditMode={props.setEditMode} userInfo={props.userInfo} onSubmit={props.saveProfDataThC} />
        </div>
    )
}

const FormikProfileData = (props) => {
    // debugger;
    return (
        <Formik
            initialValues={{
                fullname: '',
                aboutMe: '',
                lookingForAJob: '',
                lookingForAJobDescription: ''
            }}
            onSubmit={(values, { setStatus }) => {
                props.onSubmit(values.fullname, values.aboutMe, values.lookingForAJob, values.lookingForAJobDescription, setStatus); // Сюда приходит!
            }}
        >
            {({ isValid, dirty, status }) => (
                <Form>
                    <div className={style.profile_table}>
                        <div className={style.table_column}>
                            <h4>Обо мне:</h4>
                            <div className={style.table_row}>
                                <div className={style.td_name}><label htmlFor="fullname">Имя:</label></div>
                                <div className={style.td_value}><Field name="fullname" id="fullname" type="text" value={props.userInfo.fullName} /></div>
                            </div>

                            <div className={style.table_row}>
                                <div className={style.td_name}><label htmlFor="aboutMe">Кто я:</label></div>
                                <div className={style.td_value}><Field name="aboutMe" id="aboutMe" component="textarea" value={props.userInfo.aboutMe} /></div>
                            </div>

                            <div className={style.table_row}>
                                <div className={style.td_name}><label>Статус поиска работы:</label></div>
                                <div className={style.td_value}>
                                    <Field name="lookingForAJob" type="radio" value={true} />Ищу
                                    <Field name="lookingForAJob" type="radio" value={false} />Не ищу
                                </div>
                            </div>

                            <div className={style.table_row}>
                                <div className={style.td_name}><label htmlFor="lookingForAJobDescription">Навыки:</label></div>
                                <div className={style.td_value}><Field name="lookingForAJobDescription" id="lookingForAJobDescription" component="textarea" value={props.userInfo.lookingForAJobDescription} /></div>
                            </div>

                        </div>

                        <div className={style.table_column}>
                            <h4>Мои контакты:</h4>
                            {Object.keys(props.userInfo.contacts).map((key) => {
                                if (!props.userInfo.contacts[key]) return props.userInfo.contacts[key] = <span className={style.warning} >Не установлено</span>
                                return <Contact key={key} contactTitle={key} contactValue={props.userInfo.contacts[key]} />
                            })
                            }
                        </div>
                    </div>
                    <div className={style.editBtn}>
                        <button onClick={() => { props.setEditMode(false) }} type="submit" >Сохранить</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={style.table_row}>
            <div className={style.td_name}><label htmlFor={contactTitle}>{contactTitle}:</label> </div> 
            <div className={style.td_value}><Field name={contactTitle} id={contactTitle} type="text" /></div>
        </div>
    )
}

export default ProfileDataForm;