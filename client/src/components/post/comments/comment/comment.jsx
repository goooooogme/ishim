import React from 'react'
import c from './comment.module.css'

const Comment = ({author, text}) => {
    return (
        <>
                <div className={c.topComments}>
                    <img src="./user.png" className={c.user}/>
                    <span className={c.login}>{author}</span>
                    <span className={c.date}>14 Декабря 2011 в 13:54</span>
                </div>
                <p className={c.textComments}>{text}</p>
        </>
    )
}
export default Comment;