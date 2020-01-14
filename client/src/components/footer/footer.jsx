import React from 'react'
import f from './footer.module.css'

const Footer = () => {
    return (
        <div className={f.wrap}>
            <p className={f.copyright}>© 2015 эллектроный журнал города Ишима</p>
            <nav>
                <a href="#" className={f.item}>Реклама</a>
                <a href="#" className={f.item}>Соц. сети</a>
                <a href="#" className={f.item}>Обратная связь</a>
            </nav>
        </div>
    )
}

export default Footer;