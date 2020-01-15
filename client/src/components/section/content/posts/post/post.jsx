import React from 'react'
import Header from './header/header.jsx'
import Content from './content/content.jsx'
import Footer from './footer/footer.jsx'
import p from './post.module.css'

const Post = ({category, title, text, data, comments}) => {
    return (
        <div className={p.wrap}>
            <Header category={category}/>
            <div className={p.wrapContent}>
                <Content title={title} text={text} />
                <Footer data={data} comments={comments}/>
            </div>
            
        </div>
    )
}

export default Post;