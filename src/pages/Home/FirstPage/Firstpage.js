import React, { useEffect } from 'react'
import Header from '../../../components/Header/Header'
import './firstpage.scss'
import {FormOutlined } from '@ant-design/icons'
import 'aos/dist/aos.css'
import Aos from 'aos'
const Firstpage = () => {
    useEffect(()=>{
        Aos.init({duration:600})
    })
    return (
        <div className="landingPage">
            <Header />
            <div className="landingPage_wrapper">
                <div className="firstPage_content">
                    <div className="landingPage_top">
                        <div className="landingPage-topLeft">
                            <img src="	https://zircog.com/wp-content/uploads/2018/10/Logo-4.png" alt="" />
                            <h3>Zircog Technologies</h3>
                        </div>
                        <div className="landingPage-topRight">
                            <span>home</span>
                        </div>
                    </div>
                    <div className="landingPage_bottom">
                        <h1 data-aos="fade-up">Perfectionist at Every Level</h1>
                        <p data-aos="fade-up"> Perfection is a state, variously, of completeness, flawlessness, or supreme excellence. The term is used to designate a range of diverse, if often kindred, concepts. These have historically been addressed in a number of discrete disciplines.</p>
                        <div data-aos="fade-up" className="landingPageButton">
                            <button className="landingPageButton1" ><FormOutlined/> Free enquiry</button>
                            <button className="landingPageButton2" >Services</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Firstpage
