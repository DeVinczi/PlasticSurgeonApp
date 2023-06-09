import React from 'react'
import { Gallery, AboutUs, FindUs, Footer, Header } from './container'
import { Navbar } from './components'

import './App.css'

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
    )
}

export default App
