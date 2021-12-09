import React from 'react'
import './leaderscard.scss'
import {
    LinkedinFilled,
    TwitterOutlined,
    FacebookFilled,
    InstagramOutlined,
    YoutubeFilled,
    DribbbleOutlined,
    BehanceOutlined
} from '@ant-design/icons'

const LeadersCard = ({ img, name, status, p }) => {
    return (
        <div className="leader_card">
            <img src={img} alt="" />
            <span className="leader_name">{name}</span>
            <span className="status">{status}</span>
            <p>{p}</p>
            <div className="leader_card_footer">
                <LinkedinFilled />
                <TwitterOutlined />
                <FacebookFilled />
                <InstagramOutlined />
                <YoutubeFilled />
                <DribbbleOutlined />
                <BehanceOutlined />
            </div>
        </div>
    )
}

export default LeadersCard
