import React from 'react'
import Tab from './tab/tab.jsx'
import Item from './item/item.jsx'
import p from './popular.module.css'

const Popular = () => {
    return (
        <div className={p.wrap}>
            <Tab />
            <Item />
        </div>
    )
}

export default Popular;
