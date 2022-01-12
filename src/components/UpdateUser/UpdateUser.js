import React, { useState } from 'react'
import './updateUser.scss'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
const UpdateUser = ({ user }) => {
    let id = useLocation()
    id = id.pathname.split("/")[2]
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const [marital, setMarital] = useState('')
    const [education, setEducation] = useState('')
    const [about, setAbout] = useState('')

    const submit = async (e) => {
        e.preventDefault();

        const details = {
            name:name,
            email:email,
            phone:phone,
            marital:marital,
            age:age,
            education:education,
            about:about
        }
        let url = `http://localhost:8000/api/user/update/${id}`
        let options = {
            method: 'PUT',
            url: url,
            headers: {

            },
            data: details
        }
        try {
            let response = await axios(options);
            console.log(response);
            setTimeout(() => {
                navigate(-1)
            }, 300);
        } catch (error) {
            console.log('failed');
        }

        // }
        // console.log('fillle');

    }

    return (
        <div className='update_user'>
            <form onSubmit={submit}  method='put' className="update_user_wrapper">
                <div className="update_user_left">
                    <input type="text" placeholder='Write your name ' onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='Write your email ' onChange={(e) => setEmail(e.target.value)} />
                    <input type="number" placeholder='Write your mobile number ' onChange={(e) => setPhone(e.target.value)} />
                    <input type="number" placeholder='Write your age ' onChange={(e) => setAge(e.target.value)} />
                    <input type="text" placeholder='Write your marital status single/ married ' onChange={(e) => setMarital(e.target.value)} />
                    <input type="text" placeholder='Write your education ' onChange={(e) => setEducation(e.target.value)} />
                </div>
                <div className="update_user_right">
                    <textarea name="" id="" onChange={(e) => setAbout(e.target.value)}></textarea>
                    <button type='submit'>submit</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateUser
