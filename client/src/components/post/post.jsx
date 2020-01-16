import React from 'react'
import Comments from './comments/comments'
import p from './post.module.css'


const Post = ({post}) => {
    const {comments} = post;
    const url = document.location.href;
    const index = url.indexOf('post/')+5;
    const id = url.slice(index);
    console.log(url);
    return (
        <div className={p.wrap}>
          
            <div className={p.post}>
                <img src="./post1.png" />
                    <h2>{post.title}</h2>
                <p className={p.text}>
                    {post.text}
                </p>
                <Comments comments={comments || []}/>
                <div className={p.addComment}>
                    <form method="POST" >
                            <input type="text" required name="author"/>
                            <textarea required name="text"></textarea>
                            <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default Post;