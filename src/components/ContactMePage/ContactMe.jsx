import React from 'react'
import { Footer, InfoNavbar } from '../../container'
import { Navbar } from '..'
import ContactMe from '../../container/ContactMe/ContactMe';
import Infos from '../../container/Infos/Infos'

function ContactMePage() {
    return (
        <div className="ContactMePage">
            <InfoNavbar />
            <Navbar />
            <ContactMe />
            <Footer />
            <Infos />
        </div>
    );
}

export default ContactMePage
