import React from 'react' 
import h from './header.module.css'

const Header = () => {
    return (
        <div className={h.wrap}>
            <img src="./post1.png" className={h.image}/>
            <a href="#" className={h.category}>Культура</a>
        </div>
    )
}

export default Header;