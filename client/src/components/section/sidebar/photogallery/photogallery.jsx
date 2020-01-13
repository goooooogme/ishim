import React from 'react'
import pg from './photogallery.module.css'

const Photogallery = () => {
    return (
        <div className={pg.wrap}>
            <h1 className={pg.title}>Фотогалерея</h1>
            <div className={pg.grid}>
                <img src="./gallery/1.png"/>
                <img src="./gallery/2.png"/>
                <img src="./gallery/3.png"/>
                <img src="./gallery/4.png"/>
                <img src="./gallery/5.png"/>
                <img src="./gallery/6.png"/>
                <img src="./gallery/7.png"/>
                <img src="./gallery/8.png"/>
                <img src="./gallery/9.png"/>
            </div>
            <a href="#" className={pg.all}>еще 234 фото</a>
        </div>
    )
}

export default Photogallery;