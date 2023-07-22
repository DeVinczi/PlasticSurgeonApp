import React from 'react'
import './InfoNavbar.css'
import { BiMap } from "react-icons/bi"
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from "react-icons/bs"

const openFacebook = () => {
    window.open('https://www.facebook.com', '_blank');
};

const openInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
}
const openTwitter = () => {
    window.open('https://www.twitter.com', '_blank');
}

const InfoNavbar = () => {
    return (
        <div className='infobar__container'>
            <div className='info__address'>
                <BiMap className='mail' />
                <a href="https://goo.gl/maps/GiL8GV9ENU33pqfN6">
                    <p className='info__bar__address p__opensans'> Jana Heweliusza 22, Gdańsk</p>
                </a>
            </div>
            <div className='info__phone__together'>
                <BsFillTelephoneFill />
                <a href="tel:+48666909599"><p className='info__phone p__opensans'>+48 537900699</p></a>
            </div>
            <div className='info__medias'>
                <BsInstagram className='info__instagram' onClick={openInstagram}></BsInstagram>
                <BsFacebook className='info__facebook' onClick={openFacebook}></BsFacebook>
            </div>
        </div>
    )
}

export default InfoNavbar
