import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {

    const links = [{ name: 'Home', to: '/' }, { name: 'Specification', to: '/' }, { name: 'About', to: '/' }, { name: 'Services', to: '/' }, { name: 'Contact', to: '/' }]
    const [click, setClick] = useState(false);

    const showMenu = () => {
        setClick(!click);
    }

    return (
        <>
            <nav className="sidenav" onClick={showMenu}>
                <i className={click ? "fas fa-times fa-2x text-white" : "fas fa-bars fa-2x text-white"} ></i>

                <ul className={click ? "nav-list active" : "nav-list px-1"}  >
                    {links.map(link => (
                        <li className='nav-item' key={link.name}><a href="/">{link.name}</a></li>
                    ))}

                </ul>
            </nav>

        </>
    )
}
