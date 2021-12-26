// import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/userRedux';
import './Logut.scss'
const Logout = () => {
    const user = useSelector(state => state.user.currentUser)
    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        setTimeout(() => {
            navigate('/')
        }, 500);
    }
    return (
        <div className='logout'>
            <div className="logout_div">
                <h1>Welcome
                    </h1>
                    {
                        user ? <span style={{fontSize:'1.5rem',color:'green'}}> {user.name}</span> : ""
                    }
                <button className="logout_btn" onClick={(e) => handleLogout(e)}>Logout</button>
            </div>
        </div>
    )
}

export default Logout
