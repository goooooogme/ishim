import React from 'react'
import Comments from './comments/comments'
import p from './post.module.css'

function onSub(event) {
    event.preventDefault();

    const url = document.location.href;
    const index = url.indexOf('post/')+5;
    const id = url.slice(index);
    window.location.href='/post/'+id;
    
    const data = {
        author: document.forms['forma'].elements['author'].value,
        text: document.forms['forma'].elements['text'].value
    }

    fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redired: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)
    })
    .then(response => console.log(response.json()));

}

const Post = ({post}) => {
    const {comments} = post;
    const url = document.location.href;
    const index = url.indexOf('post/')+5;
    const id = url.slice(index);


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
                    <form method="POST" onSubmit={onSub} id="forma">
                            <input type="text" required id="author"/>
                            <textarea required id="text"></textarea>
                            <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default Post;