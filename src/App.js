import React from 'react'
import { AboutUs, FindUs, Footer, Header, MainPage } from './container'
import { Navbar } from './components'

import './App.css'

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <MainPage />
            <FindUs />
            <Footer />
        </div>
    )
}

export default App
