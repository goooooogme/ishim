import React from 'react'
import n from './navigation.module.css'

const Navigation = () => {
    return (
        <div className={n.wrap}>
            <nav className={n.nav}>
                <a href="/page=1" className={`${n.navLink} ${n.active}`}>Новости</a>
                <a href="#" className={n.navLink}>О городе</a>
                <a href="#" className={n.navLink}>Карта</a>
                <a href="#" className={n.navLink}>Предприятия</a>
                <a href="#" className={n.navLink}>Объявления</a>
                <a href="#" className={n.navLink}>Фотогалерея</a>
            </nav>
            <div className={n.signAndSearch}>
                <a href="#" className={`${n.login} ${n.navLink}`}><i className="fa fa-user"></i> Войти</a>
                <a href="#" className={`${n.search} ${n.navLink}`}><i className="fa fa-search"></i> Поиск</a>
            </div>
        </div>
    )
}

export default Navigation;