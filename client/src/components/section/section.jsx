import React from 'react'
import Content from './content/content.jsx'
import Sidebar from './sidebar/sidebar.jsx'
import s from './section.module.css'

const Section = ({posts, countPage, getData}) => {
    return (
        <div className={s.wrap}>
            <Content posts={posts} countPage={countPage} getData={getData}/>
            <Sidebar />
        </div>
    )
}

export default Section;