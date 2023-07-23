import React from 'react'
import { Link } from 'react-router-dom'

import './Infos.css'

const Infos = () => {
    return (
        <div className="app__footer_info_sec">
            <div className="app__footer-links_work">
                <p className="p__opensans" style={{ color: "#fff" }}>
                    <Link to='/regulamin-serwisu'> Regulamin serwisu</Link></p>
                <p className="p__opensans" style={{ color: "#fff" }}>
                    <Link to='/polityka-prywatnosci'>Polityka Prywatności</Link></p>
                <p className="p__opensans" style={{ color: "#fff" }}>
                    <Link to='/cookies'>Polityka Cookies</Link></p>
            </div>
            <div className="app_footer-copyright">
                <p p className="p__opensans" style={{ color: "#fff", fontWeight: "700" }}> Copyright 2023 © Dr Kociszewski<br></br>
                    – All rights reserved –</p>
            </div>
        </div>)
}

export default Infos
