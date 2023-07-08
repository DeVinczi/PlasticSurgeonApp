import React from 'react'
import { Gallery, AboutUs, FindUs, Footer, Header, Infos, InfoNavbar } from './container'
import { Navbar } from './components'

import './App.css'

const App = () => {
    return (
        <div>
            <InfoNavbar />
            <Navbar />
            <Header />
            <AboutUs />
            <Gallery />
            <FindUs />
            <Footer />
            <Infos />
        </div>
    )
}

export default App
