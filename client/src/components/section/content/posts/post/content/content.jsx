import React from 'react'
import c from './content.module.css'

const Content = ({title, text}) => {
    return (
        <div className={c.wrap}>
            <a href="#" className={c.title}>{title}</a>
            <p className={c.text}>
                {text}
            </p>

        </div>
    )
}

export default Content