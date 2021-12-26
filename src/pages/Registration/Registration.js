import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { login } from '../../redux/apicalls'
import '../Login/Login.scss'
import { axioss } from '../../axios'
const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isFetching, setIsFetching] = useState(false)


    const navigate  =useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsFetching(true)
        axioss.post('/user/signup',{
            name:name,
            email:email,
            password:password
        })
        if(name ||  email || password ){
            setTimeout(() => {
                navigate('/')
            }, 1000);
        }else{
            setMessage('please enter the details properly')
        }

    }
    return (
        <div className='loginPage'>
            <form action="" className='login_form' onSubmit={(e) => handleSubmit(e)}>
                <h1>registration here </h1>
                <input
                    type="text"
                    placeholder='name Here'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='email Here'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='password Here'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={isFetching} className='submitBtn'>{isFetching ? "Loading..": "Login"}</button>
            </form>
            <h1>{message}</h1>
        </div>
    )
}

export default Registration
