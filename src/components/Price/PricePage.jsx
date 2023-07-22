import React from 'react'
import { Footer, InfoNavbar } from '../../container'
import { Navbar } from '..'
import Pricing from '../../container/Pricing/Pricing';
import Infos from '../../container/Infos/Infos'

function PricePage() {
    return (
        <div class="PricePage">
            <InfoNavbar />
            <Navbar />
            <Pricing />
            <Footer />
            <Infos />
        </div>
    );
}

export default PricePage
