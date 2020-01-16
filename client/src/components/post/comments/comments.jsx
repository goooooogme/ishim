import React from 'react'
import Comment from './comment/comment'
import c from './comment/comment.module.css'

const Comments = ({comments}) => {
    const com = comments.map((i) => <Comment  author={i.author} text={i.text}  />)
    return (

        <div className={c.comments}>
        <h3>Комментарии {comments.length}</h3>
        <hr/>
        <div className={c.comment}>
            {com}
        </div>
        </div>
    )
}

export default Comments