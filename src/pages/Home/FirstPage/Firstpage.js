import React from 'react'
import './firstpage.scss'
import Fade from 'react-reveal'
import Header from '../../../components/Header/Header'
import { FormOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import Zircog from '../../../components/Zircog/Zircog'
const Firstpage = () => {
    return (
        <div className="landingPage">
            <Header />
            <div className="landingPage_wrapper">
                <div className="firstPage_content">
                   <Zircog/>
                    <div className="landingPage_bottom">
                        <Fade bottom>
                            <h1 >Perfectionist at Every Level</h1>
                            <p > Perfection is a state, variously, of completeness, flawlessness, or supreme excellence. The term is used to designate a range of diverse, if often kindred, concepts. These have historically been addressed in a number of discrete disciplines.</p>
                        </Fade>
                        <div className="landingPageButton">
                            <Fade bottom>
                                <NavLink to="contactUs">
                                    <button className="landingPageButton1" ><FormOutlined /> Free enquiry</button>
                                </NavLink>
                            </Fade>
                            <Fade bottom>
                                <button className="landingPageButton2" ><a href="#services"Services>services</a></button>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Firstpage
