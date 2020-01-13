import React from 'react'
import Top from './top/top.jsx'
import Navigation from './navigation/navigation.jsx'


const Header = () => {
    return (
        <div>
            <Top />
            <hr className="hr"/>
            <Navigation />
        </div>
    )
}

export default Header;