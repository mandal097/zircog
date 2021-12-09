import React from 'react'
import './advantages.scss'
import Fade from 'react-reveal'
import {
    SecurityScanOutlined,
    DingtalkOutlined,
    FireOutlined,
    ClusterOutlined

} from '@ant-design/icons'
const Advantages = () => {
    return (
        <div className="advantages">
            <Fade bottom>
                <h1>Why Choose Us?</h1>
                <p>It looks perfect on all major browsers, tablets and phones. The kind of product you’re looking for.</p>
            </Fade>
            <div className="advantages_wrapper">
                <div className="advantages_left">
                    <Fade bottom>
                        <div className="advantage_card">
                            <div className="img">
                                <SecurityScanOutlined className="img_icons" />
                            </div>
                            <h3>Secure Platform</h3>
                            <p>Security is freedom from, or resilience against, potential harm or other unwanted coercive change from external forces.</p>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="advantage_card">
                            <div className="img">
                                <FireOutlined className="img_icons" />
                            </div>
                            <h3>Easy to Use</h3>
                            <p>Simple and very easy to use and is straightforward and simple to use. straightforward and simple to use. An easy-to-use guide containing excellent tips.</p>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="advantage_card">
                            <div className="img">
                                <DingtalkOutlined className="img_icons" />
                            </div>
                            <h3>Creative Solutions</h3>
                            <p>Creative is relating to or involving the use of the imagination or original ideas to create something or change unleashes people's creative energy.</p>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="advantage_card">
                            <div className="img">
                                <ClusterOutlined className="img_icons" />
                            </div>
                            <h3>Unlimited Hosting Space</h3>
                            <p>An Internet hosting service is a service that runs Internet servers, allowing organizations and individuals to serve content to the Internet.</p>
                        </div>
                    </Fade>
                </div>
                <Fade bottom>
                    <div className="advantages_right">
                        <img src="	https://zircog.com/wp-content/uploads/2018/10/business-image-1.png
                   " alt="" />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Advantages
