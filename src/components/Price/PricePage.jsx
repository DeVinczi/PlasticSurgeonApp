import React from 'react'
import { InfoNavbar } from '../../container'
import { Navbar } from '..'
import Pricing from '../../container/Pricing/Pricing';

function PricePage() {
    return (
        <div class="PricePage">
            <InfoNavbar />
            <Navbar />
            <Pricing />
        </div>
    );
}

export default PricePage
