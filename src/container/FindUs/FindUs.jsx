import React from 'react'
import './FindUs.css'

import { SubHeading } from '../../components';

const MapComponent = () => (
  <div className="map__container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18578.91320943275!2d18.552818298339833!3d54.40354526835711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd752e9232141b%3A0x8b712d91f896657d!2sOlivia%20Business%20Centre!5e0!3m2!1spl!2spl!4v1685879693362!5m2!1spl!2spl"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div >
);

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" style={{ display: 'flex', alignContent: 'center' }} id="contact">
      <div className="app__wrapper_info">
        <h1 className="headtext__cormorant" style={{ marginBottom: '0.5rem' }}>FindUs</h1>
        <div className="app__wrapper-contect">
          <p className="p__cormorant" style={{ color: '#ac9a87', margin: '1rem 0' }}>Lokalizacja</p>
          <p className="p__opensans">Bora Komorowskiego 85A</p>
          <p className="p__cormorant" style={{ color: '#ac9a87', margin: '1rem 0' }}>Godziny otwarcia</p>
          <p className="p__opensans">Pon-Pn: 10.00 - 20.00</p>
          <p className="p__opensans">Sb-Nd: 10.00 - 12.00</p>
          <p className="p__cormorant" style={{ color: '#ac9a87', margin: '1rem 0' }}>Email</p>
          <p className="p__opensans_updated">kociszewski@gmail.com</p>
          <p className="p__cormorant" style={{ color: '#ac9a87', margin: '1rem 0' }}>Telefon</p>
          <p className="p__opensans_updated find__us__telephone">
            <a href="tel:+48666909599">+48 666 909 599</a></p>
        </div>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>
          Visit Me
        </button>
      </div>
      <div className="app__wrapper-map" style={{ display: 'flex', alignContent: 'center' }}>
        <MapComponent />
      </div>
    </div>
  )
}

export default FindUs
