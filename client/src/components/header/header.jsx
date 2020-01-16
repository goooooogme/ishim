import React from 'react'
import Top from './top/top.jsx'
import Navigation from './navigation/navigation.jsx'
import h from './header.module.css'

const Header = () => {
    return (
        <div className={h.wrap}>
            <Top />
            <hr className="hr"/>
            <Navigation />
        </div>
    )
}

export default Header;