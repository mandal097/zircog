import React from 'react'
import './clientCard.scss'
const ClientsCard = ({ name, status, review, img }) => {
    return (
        <div className="clientsCards">
            <div className="clientsCard_top">
                <h3>{review}</h3>
            </div>
            <div className="clientsCard_bottom">
                <img src={img} alt="" />
                <div className="clientsCard_bottom_names">
                    <span className="client_name">{name}</span>
                    <span className="client_status">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default ClientsCard
