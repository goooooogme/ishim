import React from 'react'
import Post from './post/post.jsx'


const Posts = ({posts}) => {
    console.log(posts)
    const post = posts.map((data) => <Post title={data.title} text={data.text} category={data.category} data={data.data}/>)
    return (
        <div>
            {post}
        </div>
    )
}

export default Posts;