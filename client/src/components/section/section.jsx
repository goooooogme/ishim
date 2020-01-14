import React from 'react'
import Content from './content/content.jsx'
import Sidebar from './sidebar/sidebar.jsx'
import s from './section.module.css'

const Section = ({posts}) => {
    return (
        <div className={s.wrap}>
            <Content posts={posts}/>
            <Sidebar />
        </div>
    )
}

export default Section;