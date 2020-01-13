import React from 'react'
import Header from './header/header.jsx'
import Content from './content/content.jsx'
import Footer from './footer/footer.jsx'
import p from './post.module.css'

const Post = () => {
    return (
        <div className={p.wrap}>
            <Header />
            <div className={p.wrapContent}>
                <Content />
                <Footer />
            </div>
            
        </div>
    )
}

export default Post;