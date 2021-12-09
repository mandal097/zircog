import React from 'react'
import './contactUs.scss'
import Header from '../../components/Header/Header'
import Zircog from '../../components/Zircog/Zircog'
import { NavLink } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const ContactUs = () => {
    return (
        <div className="contact_us">
            <Header Bg='#1d222b' />
            <div className="contactUs_wrapper">
                <div className="zircog">
                    <Zircog />
                </div>
                <NavLink to='/' className='nav'>Home 	&#62; </NavLink><span>contactUs</span>
                <div className="contactUs_form">
                    <div className="contactUs_left">
                        <h2>contactUs</h2>
                        <form action="">
                            <div className="name_inputs">
                                <input type="text" placeholder="firstName" />
                                <input type="text" placeholder="lastName" />
                            </div>
                            <div className="email_inputs">
                                <input type="email" placeholder="email here" />
                            </div>
                            <div className="textArea">
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <input type="button" value="submit" />
                        </form>
                    </div>
                    <div className="contactUs_right">
                        <input type="search" name="" id="" placeholder="search"/>
                    </div>
                </div>
            </div>
                <Footer/>
        </div>
    )
}

export default ContactUs
