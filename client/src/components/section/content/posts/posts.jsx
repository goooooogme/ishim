import React from 'react'
import Post from './post/post.jsx'


const Posts = ({posts}) => {
    const post = posts.map((data) => <Post title={data.title} text={data.text} category={data.category} data={data.data} comments={data.comments}/>)
    return (
        <div>
            {post}
        </div>
    )
}

export default Posts;