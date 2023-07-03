import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay } from '../../components';
import { images } from '../../constants';

const openFacebook = () => {
  window.open('https://www.facebook.com', '_blank');
};

const openInstagram = () => {
  window.open('https://www.instagram.com', '_blank');
}
const openTwitter = () => {
  window.open('https://www.twitter.com', '_blank');
}

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Check My Socials</h1>
          <div className="app__footer-links_icons">
            <FiFacebook onClick={openFacebook} />
            <FiInstagram onClick={openInstagram} />
            <FiTwitter onClick={openTwitter} />
          </div>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.logoK} alt="footer_logo" />
          <p className="p__opensans" style={{ color: '#ffffff' }}>"The best way to find yourself is to lose yourself in the service of others"</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
