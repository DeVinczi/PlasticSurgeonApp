import React from 'react'
import { Gallery, AboutUs, FindUs, Footer, Header, Infos, InfoNavbar } from '../../container'
import { Navbar } from '..'

function homePage() {
    return (
        <div className="Home">
            <InfoNavbar />
            <Navbar />
            <Header />
            <AboutUs />
            <Gallery />
            <FindUs />
            <Footer />
            <Infos />
        </div>
    );
}

export default homePage
