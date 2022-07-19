import React from "react";
import preloader from './../../images/preloader.gif'

const Preloader = () => {
    return (
        <div className='preloader' ><img src={ preloader } alt='Ожидайте' /></div>
    )
}

export default Preloader;