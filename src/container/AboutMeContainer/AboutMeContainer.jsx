import React from 'react'
import { images } from '../../constants'
import './AboutMeContainer.css'

const AboutMeContainer = () => {
    return (
        <div className='app__about__me__container section__padding'>
            <img src={images.kociszewskiImage2} className='app__about__me-kociszewski'></img>
            <div className='style-it-about-me'>
                <h1>O Mnie</h1>
                <p className='p__opensans'>Mam na imie Kajetan Kociszewski</p>
                <p className='p__opensans'>Pochodzę z Wrocławia i zajmuję się chirurgią plastyczną</p>
                <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis lacus, posuere a erat ut, mollis feugiat nibh. Maecenas nec ornare tellus. Nulla in vulputate est. Quisque sit amet accumsan ex. Duis tempus nulla sit amet aliquam mollis. Vivamus eu imperdiet augue. Duis eget mauris non neque interdum viverra. Maecenas id leo diam. Cras fermentum malesuada risus ac elementum.

                    Sed scelerisque varius sem nec tincidunt. Quisque tempus ut lorem non semper. Pellentesque semper nisl a placerat egestas. Sed luctus risus id massa dictum mollis. Proin mollis pharetra diam et elementum. Etiam a enim ut enim accumsan blandit et eget felis. Nulla finibus posuere eros, nec euismod nisl luctus id. Vivamus id ex eget felis commodo sollicitudin id vel dolor. Pellentesque elementum gravida enim, sit amet porttitor ex lobortis quis. Vivamus volutpat, dolor non tincidunt tempor, leo tellus pretium massa, vitae tempus leo felis sit amet ipsum. Vivamus a eros posuere felis facilisis laoreet.</p>
            </div>
        </div>
    )
}

export default AboutMeContainer
