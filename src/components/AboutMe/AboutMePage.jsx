import React from 'react'
import { AboutMeContainer, Footer, InfoNavbar } from '../../container'
import { Navbar } from '..'
import Infos from '../../container/Infos/Infos'

function AboutMePage() {
    return (
        <div className="AboutMePage">
            <InfoNavbar />
            <Navbar />
            <AboutMeContainer />
            <Footer />
            <Infos />
        </div>
    );
}

export default AboutMePage
