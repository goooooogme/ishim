import React from 'react'
import f from './footer.module.css'

const Footer = ({data, comments}) => {
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const lastDate = new Date(data);
    const dd = lastDate.getDate();
    const mm = lastDate.getMonth();
    const yyyy = lastDate.getFullYear();
    const date = dd+" "+month[mm]+', ' +yyyy;
    return (
        <div>
            <span className={f.footer}><i className="fa fa-calendar"></i> {date}</span>
            <span className={f.footer}><i className="fa fa-comments"></i> {comments.length} комментариев</span>
        </div>
    )   
}

export default Footer;