import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom';
import { logout } from '../../redux/userSlice';
import './Logut.scss'
const Logout = () => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch();
    const navigate  = useNavigate()
    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        navigate('/login')
    }
    return (
        <div className='logout'>
            <div className="logout_div">
                <h1>Welcome <span>{user.name}</span></h1>
                <button className="logout_btn" onClick={(e) => handleLogout(e)}>Logout</button>
            </div>
        </div>
    )
}

export default Logout
