import React from 'react'
import t from './tab.module.css'

const Tab = () => {
    return (
        <div className={t.wrap}>
            <a href="#" className={`${t.tab} ${t.active}`}>Популярное</a>
            <a href="#" className={`${t.tab}`}>Обсуждаемое</a>
        </div>
    )
}

export default Tab;