import React from 'react'
import i from './item.module.css'


const Item = () => {
    return (
        <nav className={i.nav}>
            <a href="#" className={i.item}>Вышел первый трейлер сиквела "Дня независимости"</a>
            <a href="#" className={i.item}>Samsung начнет разработку машины на автопилоте</a>
            <a href="#" className={i.item}>В доме возможного создателя Bitcoin прошли обыски</a>
            <a href="#" className={i.item}>Microsoft готовит первые расширения для Edge </a>
            <a href="#" className={i.item}>YouTube назвал самые популярные видео года</a>
        </nav>
    )
}

export default Item;