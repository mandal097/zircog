import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/userSlice'
import './Login.scss'
const Login = () => {
    const user = useSelector(state => state.user.user)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const navigate  =useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        }))
        if(name || email || password ){
            navigate('/logout')
        }else{
            setMessage('please enter the details properly')
        }

    }
    return (
        <div className='loginPage'>
            <form action="" className='login_form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login here </h1>
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
                <button type="submit" className='submitBtn'>Login</button>
            </form>
            <h1>{message}</h1>
        </div>
    )
}

export default Login
