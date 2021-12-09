import React from 'react'
import './services.scss'
import Fade from 'react-reveal'
import ServiceCard from '../../../components/ServiceCards/ServiceCard'
import { data } from '../../../components/ServiceCards/data'
const Services = () => {
    return (
        <div className='services' id="services">
            <div className="servicesHeader">
                <Fade bottom>
                    <h3>Our Services</h3>
                    <p>It looks perfect on all major browsers, tablets and phones. The kind of product you’re looking for. Phasellus lacus nibh, ullamcorper in pulvinar semper, mollis sed turpis.s</p>
                </Fade>
            </div>
            <Fade bottom>
                <div className="serviceCards">
                    {
                        data.map(item => (
                            <ServiceCard key={item.id} item={item} />
                        ))
                    }
                </div>
            </Fade>
        </div>
    )
}

export default Services
