import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import './profile.scss'
import { axioss } from '../../axios'
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/userRedux'
const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const path = useLocation()
    const id = path.pathname.split("/")[2]
    const [user, setUser] = useState([]);


    useEffect(() => {
        const fetchdata = async () => {
            const response = await axioss.get(`/user/${id}`)
            const orgData = response.data
            setUser(orgData)
        }
        fetchdata()
    }, [])

    const deleteAccount = async () => {
        const response = await axioss.delete(`/user/delete/${user._id}`)
        dispatch(logout())
        setTimeout(() => {
            navigate('/')
        }, 200);
        console.log(response);

    }
    return (
        <div className='profile_page'>
            <div className="profile_wrapper">
                <div className="profile_wrapper_left">
                    <img className="profile_img" src={user.img ? `/uploads/${user.img}` : "https://cdn-icons-png.flaticon.com/128/709/709722.png"} alt="" />
                    <span className='name'>{user.name}</span>
                    <span>{user.email}</span>
                    <div className="profile_update">
                    <NavLink to={`/update/${user._id}`} className='nav'>
                        Update Details
                        </NavLink>
                    </div>
                    <div className="profile_update" >
                        <NavLink to={`/update-img/${user._id}`} className='nav'>
                        Update Image
                        </NavLink>
                    </div>
                    <div className="profile_update">
                        <NavLink to={`/update-password/${user._id}`} className='nav'>
                            Change Password
                        </NavLink>
                    </div>
                    <div className="profile_update" onClick={deleteAccount} >
                        Delete Account
                    </div>
                </div>
                <div className="profile_wrapper_right">
                    <div className="profile_wrapper_right_top">
                        <p>{user.about ? user.about : "right something about your self mininum 40 words max 60 words click on update profile to update it"}</p>
                    </div>
                    <div className="profile_wrapper_right_bottom">
                        <div className="details">
                            <span className="details_left">Name : </span>
                            <span className="details_right">{user.name}</span>
                        </div>
                        <div className="details">
                            <span className="details_left">E-mail : </span>
                            <span className="details_right">{user.email}</span>
                        </div>
                        <div className="details">
                            <span className="details_left">User-Id : </span>
                            <span className="details_right">{user._id}</span>
                        </div>
                        <div className="details">
                            <span className="details_left">Mobile No :</span>
                            <span className="details_right">{user.mobile ? user.mobile : "required"}</span>
                        </div>
                        <div className="details">
                            <span className="details_left">Age : </span>
                            <span className="details_right">{user.age ? user.age + '  years' : "required"} </span>
                        </div>
                        <div className="details">
                            <span className="details_left">Marital status : </span>
                            <span className="details_right">{user.marital ? user.marital : "required"}</span>
                        </div>
                        <div className="details">
                            <span className="details_left">Education : </span>
                            <span className="details_right">{user.education ? user.education : "required"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
