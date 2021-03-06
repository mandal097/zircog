import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/apicalls'
import { NavLink } from 'react-router-dom'
import './Login.scss'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isFetching } = useSelector((state) => state.user);
    // const user = useSelector((state) => state.user.currentUser)

    const handleSubmit = (e) => {
        e.preventDefault()
        login(dispatch, { email, password })
        if (email || password) {
            // setTimeout(() => {
            //     navigate('/')
            // }, 1000);
        } else {
            setMessage('please enter the details properly')
        }
    }


    return (
        <div className='loginPage'>
            <form action="" className='login_form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login here </h1>
                {/* <input
                    type="text"
                    placeholder='name Here'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> */}
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
                <button type="submit" disabled={isFetching} className='submitBtn'>{isFetching ? "Logging in..." : "Login"}</button>
                <NavLink to='registration' className='account_creation'>don't have an account</NavLink>
            </form>
            {/* {error && <large>something went wrong....</large>} */}
            <h1>{message}</h1>
        </div>
    )
}

export default Login
