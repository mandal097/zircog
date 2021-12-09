import React, { useState } from 'react'
import './faq.scss'
const Faq = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        switch (show) {
            case false:
                setShow(true)
                break;
            case true:
                setShow(false)
                break;
            default:
                setShow(false);
        }
        setShow(true)
    }
    return (
        <div className="faq">
            <div className="faq_wrapper">
                <h1>FAQs</h1>
                <p>Frequently asked questions or Questions and Answers are listed questions and answers, all supposed to be commonly asked in some context, and pertaining to a particular topic. The format is commonly used on email mailing lists and other online forums, where certain common questions tend to recur.</p>
                <div className="dropdowns_container">
                    <div className="details">
                        <div className="questions">What is Rara Corporate? <span onClick={handleClick}></span></div>
                        <div className={show && "show" && "answers"}>
                            <p>A corporation is a company or group of people authorized to act as a single entity (legally a person) and recognized as such in law. Early incorporated entities were established by charter (i.e. by an ad hoc act granted by a monarch or passed by a parliament or legislature). Most jurisdictions now allow the creation of new corporations through registration. Corporations enjoy limited liability for their investors, which can lead to losses being externalized from investors to the government or general public. Corporations are usually the most profitable and powerful business entities, such as their public control, influence over government (including political candidates that support them), and ability to protect its interests and make huge profits.</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="questions">What is Rara Corporate? <span onClick={handleClick}></span></div>
                        <div className={show ? "answers" : "show"}>
                            <p>A corporation is a company or group of people authorized to act as a single entity (legally a person) and recognized as such in law. Early incorporated entities were established by charter (i.e. by an ad hoc act granted by a monarch or passed by a parliament or legislature). Most jurisdictions now allow the creation of new corporations through registration. Corporations enjoy limited liability for their investors, which can lead to losses being externalized from investors to the government or general public. Corporations are usually the most profitable and powerful business entities, such as their public control, influence over government (including political candidates that support them), and ability to protect its interests and make huge profits.</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="questions">What is Rara Corporate? <span onClick={handleClick}></span></div>
                        <div className={show ? "show" : "answers"}>
                            <p>A corporation is a company or group of people authorized to act as a single entity (legally a person) and recognized as such in law. Early incorporated entities were established by charter (i.e. by an ad hoc act granted by a monarch or passed by a parliament or legislature). Most jurisdictions now allow the creation of new corporations through registration. Corporations enjoy limited liability for their investors, which can lead to losses being externalized from investors to the government or general public. Corporations are usually the most profitable and powerful business entities, such as their public control, influence over government (including political candidates that support them), and ability to protect its interests and make huge profits.</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="questions">What is Rara Corporate? <span onClick={handleClick}></span></div>
                        <div className={show ? "show" : "answers"}>
                            <p>A corporation is a company or group of people authorized to act as a single entity (legally a person) and recognized as such in law. Early incorporated entities were established by charter (i.e. by an ad hoc act granted by a monarch or passed by a parliament or legislature). Most jurisdictions now allow the creation of new corporations through registration. Corporations enjoy limited liability for their investors, which can lead to losses being externalized from investors to the government or general public. Corporations are usually the most profitable and powerful business entities, such as their public control, influence over government (including political candidates that support them), and ability to protect its interests and make huge profits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
