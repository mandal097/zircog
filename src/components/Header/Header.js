import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
    FacebookFilled,
    FormOutlined,
    GoogleCircleFilled,
    InstagramOutlined,
    TwitterSquareFilled,
    YoutubeFilled,
    BehanceOutlined,
    GitlabOutlined
} from '@ant-design/icons'
const Header = ({ Bg }) => {
  

    const user = useSelector(state => state.user.currentUser)

    return (
        <div className="header" style={{ backgroundColor: `${Bg}` }}>
            <div className="wrapper">
                <div className="icons">
                    <FacebookFilled className="icon" />
                    <TwitterSquareFilled className="icon" />
                    <YoutubeFilled className="icon" />
                    <InstagramOutlined className="icon" />
                    <GoogleCircleFilled className="icon" />
                    <BehanceOutlined className="icon" />
                    <GitlabOutlined className="icon" />
                    <NavLink to='/logout' style={{ color: 'white' }}>
                        <span>logout</span>
                    </NavLink>
                    {
                        user ? (
                            <div style={{ marginLeft: '2rem' }} className='user_profile'> logged in as : 
                               <NavLink to={`/profile/${user._id}`} style={{ color: 'white' }}>
                                <span >{user.name}
                                </span>
                            </NavLink>
                            <div className="gotoProfile">Click Your Name to Show profile</div>
                            </div>
                        ) : (
                            <NavLink to='/login' style={{ color: 'white', marginRight: '1rem' }}>
                                <span style={{ marginLeft: '2rem' }}>login</span>
                            </NavLink>

                        )
                    }
                </div>
                <div className="enquiryBtn">
                    <button> <FormOutlined className="btnIcon" /> Enquiry </button>
                </div>
            </div>
        </div>
    )
}

export default Header
