import React from 'react'
import './404.scss'
const Error = () => {
    return (
        <div className='errorPage'>
            <div className="err_wrapper">
                <div className="img_div_error">
                <img src="https://cdn2.vectorstock.com/i/thumb-large/36/16/concept-page-404-vector-8113616.jpg" alt="" />
                </div>
                <div className="err_bottom">
                    <h1>OOPS.. PAGE NOT FOUND</h1>
                </div>
            </div>
        </div>
    )
}


export default Error

