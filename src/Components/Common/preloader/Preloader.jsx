import React from "react"

import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={ style.preloader } >Нет соединения с сервером.</div>
    )
}

export default Preloader;