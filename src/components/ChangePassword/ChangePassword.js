import React, { useState } from 'react'
import './changePassword.scss'
import {
    CloseOutlined
} from '@ant-design/icons'
// import { axioss } from '../../axios'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ChangePassword = () => {
    // const navigate = useNavigate()
    let id = useLocation()
    id = id.pathname.split("/")[2]
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errField, setErrField] = useState({
        PasswordErr: "",
        confirmPasswordErr: "",
        dismatched:""
    })
    // console.log(id);

    const submit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();

        formdata.append('password', password)

        if (validForm) {
            validForm()
            let url = `http://localhost:8000/api/user/update-password/${id}`
            let options = {
                method: 'PATCH',
                url: url,
                headers: {

                },
                data: formdata
            }
            try {
                let response = await axios(options)
                console.log(response);  
            } catch (error) {
                console.log(error);
            }

        }

    }

    const validForm = () => {
        setErrField({
            PasswordErr: "",
            confirmPasswordErr: "",
            dismatched:""
        })
        let formIsValid = true;
        if (password === "") {
            formIsValid = false;
            setErrField(pre => ({
                ...pre, PasswordErr: 'please fill your new password'
            }))
        }
        if (confirmPassword === "") {
            formIsValid = false;
            setErrField(pre => ({
                ...pre, confirmPasswordErr: 'please confirm password'
            }))
        }
        if(password !== "" && confirmPassword !== "" && password !== confirmPassword){
            formIsValid = false;
            setErrField(pre =>({
                ...pre, dismatched:'password not matched'
            }))
        }
        return formIsValid;
    }

    // const back = () =>{
    //     navigate('/profile/:id')
    // }
    return (
        <div className='change_password'>
            <form onSubmit={submit}  encType='multipart/form-data' method='patch' className="change_password_wrapper">
                {/* <input type="text" placeholder='Old password' /> */}
                <input
                    type="text"
                    placeholder='New password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                {
                    errField.PasswordErr.length > 0 && <span>{errField.PasswordErr}</span>
                }
                <input
                    type="text"
                    placeholder='Confirm password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {
                    errField.confirmPasswordErr.length > 0 && <span>{errField.confirmPasswordErr}</span>
                }
                {
                    errField.dismatched.length > 0 && <span>{errField.dismatched}</span>
                }
                <button type='submit'>Submit</button>
                {/* <CloseOutlined className='cross' onClick={back} /> */}
            </form>
        </div>
    )
}

export default ChangePassword
