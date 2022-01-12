import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import './profile.scss'
import { axioss } from '../../axios'
import { useLocation } from 'react-router-dom'
const Profile = () => {
    // const user = useSelector(state => state.user.currentUser)
    // console.log(user);
    const path = useLocation()
    const id = path.pathname.split("/")[2]
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            const response = await axioss.get(`/user/${id}`)
            // .then(response => response.data)
            //     .then((data) => {
            //         setUser(data)
            //         console.log(user)
            //     })
            const orgData = response.data
            setUser(orgData)
        }
        fetchdata()
    }, [])
    return (
        <div className='profile_page'>
            <div className="profile_wrapper">
                <div className="profile_wrapper_left">
                    <img className="profile_img" src={user.img ?`/uploads/${user.img}`:"https://cdn-icons-png.flaticon.com/128/709/709722.png"} alt="" />
                    <span className='name'>{user.name}</span>
                    <span>{user.email}</span>
                    <div className="profile_update">
                        Update profile
                    </div>
                </div>
                <div className="profile_wrapper_right">
                    <div className="profile_wrapper_right_top">
                        <p>{user.about? user.about : "right something about your self mininum 40 words max 60 words click on update profile to update it"}</p>
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
                            <span className="details_right">{user.mobile? user.mobile :"required"}</span>
                        </div>
                        <div className="details">
                            <span className="details_left">Age : </span>
                            <span className="details_right">{user.age? user.age+'  years' :"required"} </span>
                        </div>
                        <div className="details">
                            <span className="details_left">Marital status : </span>
                            <span className="details_right">{user.marital? user.marital :"required"}</span>
                        </div>
                        <div className="details">
                            <span className="details_left">Education : </span>
                            <span className="details_right">{user.education? user.education :"required"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
