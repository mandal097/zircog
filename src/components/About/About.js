import React from 'react'
import './about.scss'
const About = () => {
    return (
        <div className="about">
            <div className="about_wrapper">
                <div className="about_left">
                    <h1>Who We Are?</h1>
                    <p>Business is the activity of making one’s living or making money by producing or buying and selling goods or services. Simply put, it is any activity or enterprise entered into for profit. It does not mean it is a company, a corporation, partnership, or have any such formal organization, but it can range from a street peddler to General Motors.The term is also often used colloquially but not by lawyers or public officials to refer to a company, but this article will not deal with that sense of the word.</p>
                    <button>read more</button>
                </div>
                <div className="about_right">
                    <img src="https://zircog.com/wp-content/uploads/2018/10/man-3365368_1920-1-1536x1242.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
