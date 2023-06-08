import React from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'

import images from '../../constants/images'

const Navbar = () => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="app_logo" />
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'>
                    <a href="home">Home</a>
                </li>
                <li className='p__opensans'>
                    <a href="konsultacja-online">Konsultacja Online</a>
                </li>
                <li className='p__opensans'>
                    <a href="metamorfozy">Metamorfozy</a>
                </li>
                <li className='p__opensans'>
                    <a href="o-mnie">O Mnie</a>
                </li>
                <li className='p__opensans'>
                    <a href="kontakt">Kontakt</a>
                </li>
            </ul>
            Navbar
        </nav>
    )
}

export default Navbar
