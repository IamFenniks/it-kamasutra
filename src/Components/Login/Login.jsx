import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { connect } from 'react-redux';
import * as Yup from 'yup';
import style from './Login.module.css';
import { loginThC } from "../../redux/authReduser";
import { Navigate } from "react-router-dom";


const Login = (props) => {
    if(props.isAuth) return <Navigate to={"/myprofile"} />
    // debugger;
    return (
        <div className={style.login_page}>
            <h1>Войти на сайт.</h1>

            <FormikLogin onSubmit={ props.loginThC } />
        </div>
    )
}

const FormikLogin = (props) => {
    // debugger;
    return (
        <Formik
            initialValues={{
                password: '',
                rememberMe: '',
                email: ''
            }}
            validationSchema={Yup.object({
                password: Yup.string()
                    .min(2, 'Количество символов должно быть более 2-х')
                    .required('Обязательное к заполнению'),
                email: Yup.string()
                    .email('Ошибка. Адрес не найден')
                    .required('Обязательное к заполнению'),
            })}
            onSubmit={(values) => {
                props.onSubmit(values.email, values.password, values.rememberMe); // Сюда приходит!
            }}
        >
            <div className={style.login_form}>
                <h3>Войти с помощью email</h3>

                <Form>
                    <div className={style.form_group}>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <div className={style.err}><ErrorMessage name="email" /></div>
                    </div>

                    <div className={style.form_group}>
                        <label htmlFor="password">Пароль</label>
                        <Field name="password" type="password" />
                        <div className={style.err}><ErrorMessage name="password" /></div>
                    </div>

                    <div className={style.form_group}>
                        <label htmlFor="rememberMe">Запомнить меня</label>
                        <Field name="rememberMe" type="checkbox" />
                        <div className={style.err}><ErrorMessage name="rememberMe" /></div>
                    </div>

                    <div className={style.form_group}>
                        <button className={style.submit} type="submit">Отправить</button>
                        <button className={style.reset} type="reset">Сбросить</button>
                    </div>
                </Form>
            </div>
        </Formik>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { loginThC }) (Login);