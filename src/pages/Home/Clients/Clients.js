import React from 'react'
import ClientsCard from '../../../components/ClientsCards/ClientsCard'
import './clients.scss'
const Clients = () => {
    return (
        <div className="client">
            <div className="wrapper">
                <div className="clients_top">
                    <h1>Clients Testimonials</h1>
                    <p>Read the reviews from many of our happy clients</p>
                </div>
                <div className="clients_testimonials">
                    <ClientsCard
                        img="https://zircog.com/wp-content/uploads/2018/04/beard-2345810_19201.jpg"
                        name="Han Decker"
                        status="CEO of Micro Mobile"
                        review="Wow! what great service, I love it! Keep up the excellent work. I got this theme for one client of mine some week ago, and I can say, that the site look so good."
                    />
                    <ClientsCard
                        img="	https://zircog.com/wp-content/uploads/2018/04/business-man-1385050_19201.jpg"
                        name="Josh Baker"
                        status='Owner of Tesla Motors'
                        review="I spend an abnormal amount of time searching for the right corporate theme. I contacted support and got a message back very quickly when i had a problem. Very happy! Thank you."
                    />
                    <ClientsCard
                        img="https://zircog.com/wp-content/uploads/2018/04/beautiful-2910260_19201.jpg
                        "
                        name="Andrea Hopkins"
                        status='Owner of KFC'
                        review="Can’t fault this theme or the amazing support. So far so good! Couldn’t find how to change an excerpt, was provided a youtube video link within an hour."
                    />
                    <ClientsCard
                        img="	https://zircog.com/wp-content/uploads/2018/04/model-2911322_19201.jpg"
                        name="
                        Brad Gillo"
                        status='Marketing Head at Siemens'
                        review="Well done to the RaraTheme team for this great WordPress theme. I highly recommend it and the rest of their themes. Well coded and great designs."
                    />
                </div>
            </div>
        </div>
    )
}

export default Clients
