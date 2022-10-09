import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import style from './Login.module.css';

const FormikLogin = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: ''
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Допускается не более 15 символов')
                    .required('Обязательное к заполнению'),
                lastName: Yup.string()
                    .max(20, 'Допускается не более 20 символов')
                    .required('Обязательное к заполнению'),
                email: Yup.string()
                    .email('Ошибка. Адрес не найден')
                    .required('Обязательное к заполнению'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(
                        'Форма регистрации отправлена \n ' + JSON.stringify(values, null, 2)
                    );
                    setSubmitting(false);
                }, 400);
                
            }}
        >
            <div className={style.login_form}>
                <h3>Войти с помощью email</h3>

                <Form>
                    <div className={style.form_group}>
                        <label htmlFor="firstName">Имя</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" />
                    </div>

                    <div className={style.form_group}>
                        <label htmlFor="lastName">Фамилия</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" />
                    </div>

                    <div className={style.form_group}>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" />
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

const Login = (props) => {
return (
    <div className={style.login_page}>
        <h1>Войти на сайт.</h1>

        <FormikLogin />
    </div>
)
}

export default Login;