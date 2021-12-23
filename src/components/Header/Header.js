import React from 'react'
import './header.scss'
import {NavLink} from 'react-router-dom'
import {
    FacebookFilled,
    FormOutlined,
    GoogleCircleFilled,
    InstagramOutlined,
    TwitterSquareFilled,
    YoutubeFilled,
    BehanceOutlined ,
    GitlabOutlined 
} from '@ant-design/icons'
const Header = ({Bg}) => {
    return (
        <div className="header" style={{backgroundColor:`${Bg}`}}>
            <div className="wrapper">
                <div className="icons">
                    <FacebookFilled className="icon" />
                    <TwitterSquareFilled className="icon" />
                    <YoutubeFilled className="icon" />
                    <InstagramOutlined className="icon" />
                    <GoogleCircleFilled className="icon" />
                    <BehanceOutlined className="icon" />
                    <GitlabOutlined className="icon" />
                    <NavLink to='/login'>

                    <GitlabOutlined className="icon"  />
                    </NavLink>
                    <GitlabOutlined className="icon" />
                </div>
                <div className="enquiryBtn">
                    <button> <FormOutlined className="btnIcon" /> Enquiry </button>
                </div>
            </div>
        </div>
    )
}

export default Header
