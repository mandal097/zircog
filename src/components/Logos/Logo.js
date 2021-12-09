import React from 'react'
import './Logo.scss'
const Logo = () => {
    return (
        <div className="logos">
            <div className="logo_wrapper">
                <h3>Client’s Logo Section</h3>
                <div className="bottom_logos">
                    <div className="logo_s">
                        <img src="https://zircog.com/wp-content/uploads/2018/04/logo2.png" alt="" />
                    </div>
                    <div className="logo_s">
                        <img src="	https://zircog.com/wp-content/uploads/2018/04/logo1.png" alt="" />
                    </div>
                    <div className="logo_s">
                        <img src="	https://zircog.com/wp-content/uploads/2018/04/logo3.png" alt="" />
                    </div>
                    <div className="logo_s">
                        <img src="https://zircog.com/wp-content/uploads/2018/04/logo4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logo
