import React from 'react'
import t from './top.module.css'

const Top = () => {
    return (
        <div className={t.wrap}>
            <div className={t.logoName}>
                <img src="./logo.png" alt="logo" className={t.image}/>
                <div className={t.city}>
                    <h1 className={t.cityName}>Город ишим</h1>
                    <p className={t.portalName}>эллектроный журнал</p>
                </div>
            </div>
            <div className={t.social}>
                <a href="#" className={t.link}> <i class="fa fa-twitter"></i></a>
                <a href="#" className={t.link}> <i class="fa fa-facebook"></i></a>
                <a href="#" className={t.link}> <i class="fa fa-instagram"></i></a>
            </div>
        </div>
    )
}

export default Top;