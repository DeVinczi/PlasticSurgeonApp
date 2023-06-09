import React from 'react';
import './AboutUs.css'
import images from '../../constants/images';

const AboutUs = () => {
    return (
        <div className="app__aboutus app__bg flex__center section__padding" id="about">
            <div className="app__aboutus-overlay flex__center">
                <img src={images.G} alt="G" />
            </div>
            <div className="app__aboutus-content flex__center">
                <div className="app__aboutus-content_about">
                    <h1 className="headtext__cormorant">About Us</h1>
                    <img src={images.spoon} alt="about_spoon" className="spoon__img" />
                    <p className="p__opensans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <button type="button" className="custom__button">
                        Know More
                    </button>
                </div>
                <div className="app__aboutus-content_knife flex__center">
                    <img src={images.knife} alt="about_knife" />
                </div>
                <div className="app__aboutus-content_history">
                    <h1 className="headtext__cormorant">Our History</h1>
                    <img src={images.spoon} alt="about_spoon" className="spoon__img" />
                    <p className="p__opensans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <button type="button" className="custom__button">
                        Know More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
