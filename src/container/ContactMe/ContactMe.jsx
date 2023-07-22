import React from 'react'
import './ContactMe.css'

import { BsFillTelephoneFill } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { images } from '../../constants'
const ContactMe = () => {
    return (
        <div className='app__contact__me section__padding'>
            <h1 className='header__contact-me'>Kontakt</h1>
            <p className='p__opensans style-it'>Zapraszam do mojej kliniki.</p>
            <p className='p__opensans style-it'>Jestem do twojej dyspozycji!</p>
            <div className='p__opensans style-it-sec'>
                <p>Zadzwoń i umów się na konsultacje</p>
                <div className='app__info__phone__together'>
                    <BsFillTelephoneFill />
                    <a href="tel:+48666909599"><p className='info__phone p__opensans' style={{ textDecoration: 'none' }}>+48 537900699</p>
                    </a>
                </div>

                <div className='app__contact_me-mail'>
                    <AiOutlineMail />
                    <a href="mailto:dr.kociszewski@email.pl"><p className='app__contact_me-email p__opensans '>dr.kociszewski@email.com</p>
                    </a>
                </div>
            </div>

            <div className='app__contact-wrapper'>
                <div className="app__ppp p__opensans style-it-fourth">
                    <p>Siedziba firmy</p>
                    <p>35-700 Gdańsk</p>
                    <p>ul. Korsarzy 9a</p>
                    <br />
                    <p>pon-pt: 10:00-20:00</p>
                    <p>sb-nd: nieczynne</p>
                    <a href="https://goo.gl/maps/GiL8GV9ENU33pqfN6">
                        <button type="button" className="p__opensans custom__button action-button__contact-me">Mapa dojazdu</button>
                    </a>
                </div>
                <img src={images.budynek} alt="building" className='app__contact__building' />
            </div>
        </div >
    )
}

export default ContactMe
