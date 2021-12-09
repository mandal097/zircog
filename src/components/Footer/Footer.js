import { BehanceCircleFilled, FacebookFilled, InstagramFilled, InstagramOutlined, TwitterSquareFilled } from '@ant-design/icons'
import React from 'react'
import './footer.scss'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_wrapper">
                <div className="footer_divs">
                    <h3>Software Company</h3>
                    <p className="footer_p">Software company <br /> is a beautiful, this Magazine theme built to provide <br /> supreme user experience to the visitors. The theme’s responsive design adapts into the various screens and sizes of devices .</p>
                </div>
                <div className="footer_divs">
                    <h3>Our Company</h3>
                    <p>Home</p>
                </div>
                <div className="footer_divs">
                    <h3>Recent Posts</h3>
                    <div className="footer_recents">
                        <div className="footer_divs_left">
                            <img src="https://zircog.com/wp-content/plugins/raratheme-companion/public/css/image/no-featured-img.png" alt="" />
                        </div>
                        <div className="footer_divs_right">
                            <span>Uncategorized</span>
                            <span>Hello world!</span>
                            <span className="footer_dates">February 24, 2021</span>
                        </div>
                    </div>
                    <div className="footer_recents">
                        <div className="footer_divs_left">
                            <img src="	https://zircog.com/wp-content/uploads/2018/04/interior-design-1508276_19201-370x240.jpg" alt="" />
                        </div>
                        <div className="footer_divs_right">
                            <span>Design</span>
                            <span>A company limited by guarantee.</span>
                            <span className="footer_dates">May 1, 2018</span>
                        </div>
                    </div>
                    <div className="footer_recents">
                        <div className="footer_divs_left">
                            <img src="	https://zircog.com/wp-content/uploads/2018/04/StockSnap_HGVQPNFUDV1-370x240.jpg" alt="" />
                        </div>
                        <div className="footer_divs_right">
                            <span >Design</span>
                            <span>Love the holidays and read book all day.</span>
                            <span className="footer_dates">May 1, 2018</span>
                        </div>
                    </div>
                </div>
                <div className="footer_divs">
                    <h3>Subscribe and Follow</h3>
                    <div className="icons">
                        <div className="icon_s">
                            <FacebookFilled className="icon" />
                        </div>
                        <div className="icon_s">
                            <InstagramFilled className="icon" />
                        </div>
                        <div className="icon_s">
                            <TwitterSquareFilled className="icon" />
                        </div>
                        <div className="icon_s">
                            <InstagramOutlined className="icon" />
                        </div>
                        <div className="icon_s">
                            <BehanceCircleFilled className="icon" />
                        </div>
                    </div>
                </div>
                <div className="footer_footer">
                    <p>Copyright © 2021 Zircog Technologies.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
