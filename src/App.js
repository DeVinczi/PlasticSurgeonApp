import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "./components/Home/HomePage.jsx";
import ConsultationPage from './components/Consultation/ConsultationPage.jsx';
import OfferPage from './components/Offer/OfferPage.jsx';
import MethamorphosisPage from './components/Methamorphosis/MethamorphosisPage.jsx';
import PricePage from './components/Price/PricePage.jsx'
import ContactMePage from './components/ContactMe/ContactMe.jsx';
import RulesOfServicePage from './components/RulesOfService/RulesOfServicePage.jsx';
import PrivacyPolicyPage from './components/PrivacyPolicy/PrivacyPolicy.jsx';
import CookiesPolicyPage from './components/CookiesPolicy/CookiesPolicyPage.jsx';
import AboutMePage from './components/AboutMe/AboutMePage.jsx'


import './App.css'



const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="oferta" element={<OfferPage />}></Route>
                <Route path="konsultacja-online" element={<ConsultationPage />}></Route>
                <Route path="cennik" element={<PricePage />}></Route>
                <Route path="metamorfozy" element={<MethamorphosisPage />}></Route>
                <Route path="o-mnie" element={<AboutMePage />}></Route>
                <Route path="kontakt" element={<ContactMePage />}></Route>
                <Route path="regulamin-serwisu" element={<RulesOfServicePage />}></Route>
                <Route path="polityka-prywatnosci" element={<PrivacyPolicyPage />}></Route>
                <Route path="polityka-cookies" element={<CookiesPolicyPage />}></Route>
            </Routes>
        </div>
    )
}

export default App
