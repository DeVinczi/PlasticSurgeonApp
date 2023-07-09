import React from 'react';
import './AboutUs.css'
import images from '../../constants/images';

function slideInOnScroll() {
    const div = document.querySelector('.app__aboutus-content_history');
    const divSec = document.querySelector('.app__aboutus-content_about');
    const windowHeight = window.innerHeight;
    const divOffset = div.offsetTop;

    if (window.screenY > divOffset - windowHeight) {
        div.classList.add('slide-in');
        divSec.classList.add('slide-in');
    }
}

const AboutUs = () => {
    window.addEventListener('scroll', slideInOnScroll)
    return (
        <div className="app__aboutus app__bg flex__center section__padding" id="about">
            <div className="app__aboutus-overlay flex__center">
            </div>
            <div className="app__aboutus-content flex__center">
                <div className="app__aboutus-content_about">
                    <h1 className="headtext__cormorant">O mnie</h1>
                    <p className="p__opensans_updated">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="app__aboutus-content_knife flex__center">
                    <img src={images.kociszewskiImage} alt="about_knife" />
                </div>
                <div className="app__aboutus-content_history">
                    <h1 className="headtext__cormorant">Moja historia</h1>
                    <p className="p__opensans_updated">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <button type="button" className="p__opensans custom__button action-button" style={{ color: '#fff' }}>
                        Dowiedz się więcej
                    </button>
                </div>
            </div>
        </div >
    )
}

export default AboutUs
