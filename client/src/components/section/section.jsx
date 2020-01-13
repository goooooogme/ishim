import React from 'react'
import Content from './content/content.jsx'
import Sidebar from './sidebar/sidebar.jsx'
import s from './section.module.css'

const Section = () => {
    return (
        <div className={s.wrap}>
            <Content />
            <Sidebar />
        </div>
    )
}

export default Section;