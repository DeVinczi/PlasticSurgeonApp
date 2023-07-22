import React from 'react'
import { Gallery, AboutUs, FindUs, Footer, Header, Infos, InfoNavbar } from '../../container'
import { Navbar } from '..'

function homePage() {
    return (
        <div class="Home">
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
