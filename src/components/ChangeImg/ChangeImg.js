import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './changeImg.scss'
import axios from 'axios'

const ChangeImg = () => {
    let id = useLocation()
    id = id.pathname.split("/")[2]
    const navigate = useNavigate()
    const [sharedImage, setSharedImage] = useState('');

    const handlechange = (e) => {
        const image = e.target.files[0]

        if (image === '' || image === undefined) {
            alert(`not an image , the file is a ${typeof image}`)
            return;
        }
        setSharedImage(image)
    };

    const submit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('img', sharedImage)

        let url = `http://localhost:8000/api/user/update-img/${id}`
        let options = {
            method: 'PATCH',
            url: url,
            headers: {

            },
            data: formData
        }
        try {
            let response = await axios(options);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            navigate(-1)
        }, 300);
    }

    return (
        <div className='change_img'>
            <form onSubmit={submit} encType='multipart/form-data' method='patch' className="change_img_wrapper">
                <input type="file" accept="image/gif , image/jpeg  ,image/png"
                    name='image'
                    id='file'
                    style={{ display: 'none' }}
                    onChange={handlechange}
                />
                <p style={{ fontSize: '16px', color: 'blue' }}>
                    <label htmlFor="file">Select an Image to Share</label>
                </p>
                {sharedImage &&
                    <img src={URL.createObjectURL(sharedImage)} alt='img' className='image' />
                }
                {sharedImage &&
                    <button type='submit'> Upload</button>
                }
            </form>
        </div>
    )
}

export default ChangeImg
