import React from 'react'
import { images } from '../../constants';
import './Header.css';

const myStyle = {
};

console.log(myStyle);

const Header = () => (
  <div className="app__header section__padding" id="home" style={{
    backgroundImage: `url(${images.womanGrey})`
  }}>
    <div className="app__wrapper_info-header">
      <h1 className="app__header-h1">Podaruj sobie<br></br>piękno</h1>
      <p className="p__opensans_updated style-header" style={{ margin: '2rem 0' }}>Kompleksowe odmładzanie. Szeroka gama zabiegów odmładzających i upiększających.<br></br> Terapia dobrana do indywidualnych potrzeb każdego pacjenta.</p>
      <a href='/cennik'><button type="button" className='p__opensans custom__button action-button' style={{ color: '#ffffff' }}>Sprawdź ofertę</button></a>
    </div>
  </div >
);

export default Header
