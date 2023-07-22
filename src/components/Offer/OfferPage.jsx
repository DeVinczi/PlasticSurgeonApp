import React from 'react'
import { InfoNavbar } from '../../container'
import { Navbar } from '..'
import Offerheader from '../../container/OfferHeader/OfferHeader';

function OfferPage() {
    return (
        <div className="offerPage">
            <InfoNavbar />
            <Navbar />
            <Offerheader />
        </div>
    );
}

export default OfferPage
