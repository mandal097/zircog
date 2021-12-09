import React from 'react'
import About from '../../components/About/About'
import Stats from './Stats/Stats'
import Advantages from './Advantages/Advantages'
import CStudies from './CaseStudies/CStudies'
import Clients from './Clients/Clients'
import Firstpage from './FirstPage/Firstpage'
import './home.scss'
import Leaders from './Leaders/Leaders'
import Services from './Services/Services'
import Blogs from './Blogs/Blogs'
import Banner from '../../components/BannerPremium/Banner'
import Footer from '../../components/Footer/Footer'
import Faq from './Faq/Faq'
import Logo from '../../components/Logos/Logo'
const Home = () => {
    return (
        <div className="home">
            <Firstpage/>
            <Services/>
            <About/>
            <Advantages/>
            <Leaders/>
            <Clients/>
            <Stats/>
            <CStudies/>
            <Blogs/>
            <Banner/>
            <Faq/>
            <Logo/>
            <Footer/>
        </div>
    )
}

export default Home
