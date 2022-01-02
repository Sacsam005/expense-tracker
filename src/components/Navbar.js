import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [click, setClick] = useState(false);

    const showMenu = () => {
        setClick(!click);
    }

    return (
        <>
            <nav className="sidenav" onClick={showMenu}>
                <ul className={click ? "nav-list active" : "nav-list"}  >
                    <i className={click ? "fa-times fa-2x" : "fa-bars fa-2x"} ></i>

                    <li className='nav-item'><a href="/">Home</a></li>
                    <li className='nav-item'><a href="/">Specification</a></li>
                    <li className='nav-item'><a href="/">About</a></li>
                    <li className='nav-item'><a href="/">Services</a></li>
                    <li className='nav-item'><a href="/">Contact</a></li>
                </ul>
            </nav>

        </>
    )
}
