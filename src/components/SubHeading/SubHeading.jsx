import React from 'react'
import { images } from '../../constants'

const SubHeading = ({ title }) => (
    <div style={{ marginBottom: '1rem' }}>
        <p className="p__cormorant" style={{ color: '#ffffff' }}>{title}</p>
        <img src={images.knf2} alt="spoon" className='spoon__img' />
    </div>
)

export default SubHeading
