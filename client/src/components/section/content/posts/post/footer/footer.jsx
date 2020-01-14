import React from 'react'
import f from './footer.module.css'

const Footer = () => {
    return (
        <div>
            <span className={f.footer}><i className="fa fa-calendar"></i> 29 Сентября, 2015</span>
            <span className={f.footer}><i className="fa fa-comments"></i> 25 комментариев</span>
        </div>
    )   
}

export default Footer;