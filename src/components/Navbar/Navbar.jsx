import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu, GiStethoscope } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logoK} alt="app_logo" />
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href="home">Home</a></li>
                <li className='p__opensans'><a href="konsultacja-online">Konsultacja </a></li>
                <li className='p__opensans'><a href="metamorfozy">Metamorfozy</a></li>
                <li className='p__opensans'><a href="o-mnie">O Mnie</a></li>
                <li className='p__opensans'><a href="kontakt">Kontakt</a></li>
            </ul>
            <div className='app__navbar-login'>
                <a href="/login" className='p__opensans'>Log In / Register</a>
                <div />
                <a href="/" className='p__opensans'>Umów wizytę</a>
            </div>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color="#ffffff" fontSize={27} onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                        <ul className='app__navbar-smallscreen_links'>
                            <li className='p__opensans'><a href="home">Home</a></li>
                            <li className='p__opensans'><a href="konsultacja-online">Konsultacja</a></li>
                            <li className='p__opensans'><a href="metamorfozy">Metamorfozy</a></li>
                            <li className='p__opensans'><a href="o-mnie">O Mnie</a></li>
                            <li className='p__opensans'><a href="kontakt">Kontakt</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
