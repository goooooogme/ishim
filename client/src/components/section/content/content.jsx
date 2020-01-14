import React from 'react'
import Posts from './posts/posts.jsx'

const Content = ({posts}) => {
    return (
        <div>
            <Posts posts={posts}/>
        </div>
    )
}

export default Content;