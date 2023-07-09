import React from 'react'
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">Podaruj sobie piękno</h1>
      <p className="p__opensans_updated" style={{ margin: '2rem 0' }}>Kompleksowe odmładzanie. Szeroka gama zabiegów odmładzających i upiększających.<br></br> Terapia dobrana do indywidualnych potrzeb każdego pacjenta.</p>
      <button type="button" className='p__opensans custom__button action-button' style={{ color: '#ffffff' }}>Sprawdź ofertę</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.mainTheme} alt="header-img" />
    </div>
  </div>
);

export default Header
