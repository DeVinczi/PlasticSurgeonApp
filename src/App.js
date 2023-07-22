import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./components/Home/HomePage.jsx";
import ConsultationPage from './components/Consultation/ConsultationPage.jsx';
import OfferPage from './components/Offer/OfferPage.jsx';
import MethamorphosisPage from './components/Methamorphosis/MethamorphosisPage.jsx';
import PricePage from './components/Price/PricePage.jsx'
import ContactMePage from './components/ContactMePage/ContactMe.jsx';
import RulesOfServicePage from './components/RulesOfService/RulesOfServicePage.jsx';
import PrivacyPolicyPage from './components/PrivacyPolicy/PrivacyPolicy.jsx';
import CookiesPolicyPage from './components/CookiesPolicy/CookiesPolicyPage.jsx';
import AboutMePage from './components/AboutMe/AboutMePage.jsx'


import './App.css'



const App = () => {
    return (
        <div className="App" style={{ overflow: 'hidden' }}>
            <HashRouter >
                <Routes basename={process.env.PUBLIC_URL}>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/oferta" element={<OfferPage />}></Route>
                    <Route exact path="/konsultacja-online" element={<ConsultationPage />}></Route>
                    <Route exact path="/cennik" element={<PricePage />}></Route>
                    <Route exact path="/metamorfozy" element={<MethamorphosisPage />}></Route>
                    <Route exact path="/o-mnie" element={<AboutMePage />}></Route>
                    <Route exact path="/kontakt" element={<ContactMePage />}></Route>
                    <Route exact path="/regulamin-serwisu" element={<RulesOfServicePage />}></Route>
                    <Route exact path="/polityka-prywatnosci" element={<PrivacyPolicyPage />}></Route>
                    <Route exact path="/polityka-cookies" element={<CookiesPolicyPage />}></Route>
                </Routes>
            </HashRouter>

        </div >
    )
}

export default App
