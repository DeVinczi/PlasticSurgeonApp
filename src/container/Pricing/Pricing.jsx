import React from 'react'
import './Pricing.css'
import { MdDownload } from 'react-icons/md'
import Table from '../Table/Table'
import '../Table/Table.css'

const Pricing = () => {
    return (
        <div className="pricing__header section__padding">
            <div className="pricing__context p__opensans">
                <h1>Cennik</h1>
                <button className='custom__button__pricing p__opensans_updated'><MdDownload /><p>Pobierz cennik</p></button>
                <Table />
            </div>
        </div>
    )
}

export default Pricing
