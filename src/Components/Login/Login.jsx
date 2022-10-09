import React from "react";
import { Formik } from "formik";
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
            {formik => (
                <div className={style.login_form}>
                    <h3>Войти с помощью email</h3>

                    <form onSubmit={formik.handleSubmit}>
                        <div className={style.form_group}>
                            <label htmlFor="firstName">Имя</label>
                            <input id="firstName" type="text" {...formik.getFieldProps('firstName')} />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div>{formik.errors.firstName}</div>
                            ) : null}
                        </div>

                        <div className={style.form_group}>
                            <label htmlFor="lastName">Фамилия</label>
                            <input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
                            {formik.touched.lastName && formik.errors.lsstName ? (
                                <div>{formik.errors.lastName}</div>
                            ) : null}
                        </div>

                        <div className={style.form_group}>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className={style.form_group}>
                            <button className={style.submit} type="submit">Отправить</button>
                            <button className={style.reset} type="reset" onClick={formik.resetForm}>Сбросить</button>
                        </div>
                    </form>
                </div>
            )}
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