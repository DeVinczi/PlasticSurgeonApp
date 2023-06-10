import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay } from '../../components';
import { images } from '../../constants';

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Check My Socials</h1>
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.logoK} alt="footer_logo" />
          <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others"</p>
          <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />

        </div>
      </div>
    </div>
  )
}

export default Footer
