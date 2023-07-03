import React from 'react'

import './Infos.css'

const Infos = () => {
    return (
        <div className="app__footer_info_sec">
            <div className="app__footer-links_work">
                <p className="p__opensans" style={{ color: "#fff" }}>
                    <a href='/regulamin-serwisu'> Regulamin serwisu</a></p>
                <p className="p__opensans" style={{ color: "#fff" }}>
                    <a href='/polityka-prywatnosci'>Polityka Prywatności</a></p>
                <p className="p__opensans" style={{ color: "#fff" }}>
                    <a href='/cookies'>Polityka Cookies</a></p>
            </div>
            <div class="app_footer-copyright">
                <p p className="p__opensans" style={{ color: "#fff", fontWeight: "700" }}> Copyright 2023 © Dr Kociszewski<br></br>
                    – All rights reserved –</p>
            </div>
        </div>)
}

export default Infos
