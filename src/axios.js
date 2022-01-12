import axios from 'axios';

export const axioss = axios.create({
    baseURL: `http://localhost:8000/api/`
    // baseURL: `https://node-zirco.herokuapp.com/api/`
})
