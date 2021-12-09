import React from 'react'
import './serviceCard.scss'
import {
    BorderInnerOutlined,
    LaptopOutlined ,
    PlusSquareOutlined,
    DotChartOutlined,
    MobileOutlined,
    RadarChartOutlined
} from "@ant-design/icons"
const ServiceCard = ({ item }) => {
    return (
        <div className="card">
            <div className="services_cardsImg">
            {
                item.h3 === "planning" ? <BorderInnerOutlined  className="sevices_icons" /> : ""
            }
            {
                item.h3 === "Super Ideas" ? <LaptopOutlined  className="sevices_icons" /> : ""
            }
            {
                item.h3 === "SEO & Advertising" ? <PlusSquareOutlined className="sevices_icons" /> : ""
            }
            {
                item.h3 === "Responsive Design" ? <DotChartOutlined  className="sevices_icons" /> : ""
            }
            {
                item.h3 === "Creative Direction" ? <MobileOutlined  className="sevices_icons" /> : ""
            }
            {
                item.h3 === "Coding & Development" ? <RadarChartOutlined  className="sevices_icons" /> : ""
            }
            </div>
            <h3>{item.h3}</h3>
            <p>{item.p}</p>
            <button>Read More</button>
        </div>
    )
}

export default ServiceCard
