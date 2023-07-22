import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
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
          <h1 className="app__footer-headtext">Poznaj opinie o Mnie</h1>
          <div className="app__footer-links_icons">
            <FiFacebook onClick={openFacebook} />
            <FiInstagram onClick={openInstagram} />
            <FiTwitter onClick={openTwitter} />
          </div>
          <img className='app__footer_znany' src={images.znanyLekarz}></img>
        </div>
        <div className="app__footer-links_logo">
          <div className='app__footer-first-links'>
            <p className="p__cormorant nomargin-text-footer" style={{ color: '#ac9a87' }}>Lokalizacja</p>
            <p className="p__opensans" style={{ color: '#fff' }}>Bora Komorowskiego 85A</p>
            <p className="p__cormorant nomargin-text-footer" style={{ color: '#ac9a87' }}>Godziny otwarcia</p>
            <p className="p__opensans" style={{ color: '#fff' }}>Pon-Pn: 10.00 - 20.00</p>
            <p className="p__opensans" style={{ color: '#fff' }}>Sb-Nd: 10.00 - 12.00</p>
          </div>
          <div className='app__footer-second-links'>
            <p className="p__cormorant nomargin-text-footer-sec" style={{ color: '#ac9a87' }}>Email</p>
            <p className="p__opensans_updated" style={{ color: '#fff' }}>kociszewski@gmail.com</p>
            <p className="p__cormorant nomargin-text-footer-sec" style={{ color: '#ac9a87' }}>Telefon</p>
            <p className="p__opensans_updated find__us__telephone" style={{ color: '#fff' }}>
              <a href="tel:+48666909599">+48 666 909 599</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
