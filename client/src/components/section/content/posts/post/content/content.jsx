import React from 'react'
import c from './content.module.css'

const Content = ({title, text, id}) => {
    
    return (
        <div className={c.wrap}>
            <a href={`/post/${id}`} className={c.title}>{title}</a>
            <p className={c.text}>
                {text}
            </p>

        </div>
    )
}

export default Content