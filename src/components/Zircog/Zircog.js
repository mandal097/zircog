import React from 'react'
import './Zircog.scss'
import Fade from 'react-reveal'
import { NavLink } from 'react-router-dom'
const Zircog = () => {
    return (
        <div className="landingPage_top">
            <div className="landingPage-topLeft">
                <Fade bottom>
                    <img src="	https://zircog.com/wp-content/uploads/2018/10/Logo-4.png" alt="" />
                </Fade>
                <Fade bottom>
                    <h3>Zircog Technologies</h3>
                </Fade>
            </div>
            <div className="landingPage-topRight">
                <Fade bottom>
                    <NavLink to='/' className="span">home</NavLink>
                </Fade>
            </div>
        </div>
    )
}

export default Zircog
