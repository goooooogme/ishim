import React from 'react'
import Posts from './posts/posts.jsx'
import ReactPaginate from 'react-paginate';

const Content = ({posts, countPage, getData}) => {

    return (
        <div>
            <Posts posts={posts}/>

        </div>
    )
}

export default Content;