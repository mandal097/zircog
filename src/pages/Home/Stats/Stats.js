import React from 'react'
import './stats.scss'
import {
    RocketOutlined,
    BgColorsOutlined,
    UserOutlined,
    FlagOutlined
} from '@ant-design/icons'

const Stats = () => {
    return (
        <div className="stats">
            <div className="stats_wrapper">
                <h2>Our Stats</h2>
                <p>Statistics is a branch of mathematics dealing with the collection, classification, analysis, interpretation of numerical facts, for drawing inferences on the basis of their quantifiable likelihood probability of data.</p>
                <div className="statsCard_container">
                    <div className="stats_cards">
                        <div className="div"><RocketOutlined className="span"/></div>
                        <div className="stats_num">400</div>
                        <div className="stat_status">Completed Project</div>
                    </div>
                    <div className="stats_cards">
                        <div className="div"><BgColorsOutlined className="span" /></div>
                        <div className="stats_num">1,258</div>
                        <div className="stat_status">Coffee Cups</div>
                    </div>
                    <div className="stats_cards">
                        <div className="div"><UserOutlined className="span" /></div>
                        <div className="stats_num">5,765</div>
                        <div className="stat_status">Valid Customers</div>
                    </div>
                    <div className="stats_cards">
                        <div className="div"><FlagOutlined className="span"/></div>
                        <div className="stats_num">400</div>
                        <div className="stat_status">Award Recognizition</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
