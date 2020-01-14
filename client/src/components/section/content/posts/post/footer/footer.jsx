import React from 'react'
import f from './footer.module.css'

const Footer = ({data}) => {
    return (
        <div>
            <span className={f.footer}><i className="fa fa-calendar"></i> {data}</span>
            <span className={f.footer}><i className="fa fa-comments"></i> 25 комментариев</span>
        </div>
    )   
}

export default Footer;