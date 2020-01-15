import React from 'react'
import f from './footer.module.css'

const Footer = ({data, comments}) => {
    return (
        <div>
            <span className={f.footer}><i className="fa fa-calendar"></i> {data}</span>
            <span className={f.footer}><i className="fa fa-comments"></i> {comments.length} комментариев</span>
        </div>
    )   
}

export default Footer;