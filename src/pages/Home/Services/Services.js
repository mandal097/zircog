import React from 'react'
import ServiceCard from '../../../components/ServiceCards/ServiceCard'
import './services.scss'
import { data } from '../../../components/ServiceCards/data'
const Services = () => {
    return (
        <div className='services'>
            <div className="servicesHeader">
                <h3>Our Services</h3>
                <p>It looks perfect on all major browsers, tablets and phones. The kind of product you’re looking for. Phasellus lacus nibh, ullamcorper in pulvinar semper, mollis sed turpis.s</p>
            </div>
            <div className="serviceCards">
                {
                    data.map(item=>(

                        <ServiceCard key={item.id}  item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Services
