import React, { useState } from 'react'
import { loginApi } from '../../services/user'

export default function Login() {
    const [state, setState] = useState({
        taiKhoan: '',
        matKhau: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(state);
        const result = await loginApi(state);
        localStorage.setItem("USER_INFOKEY", JSON.stringify(result.data.content))
        console.log(result);
    }
    return (
        <form onSubmit={handleSubmit} className='w-25 mx-auto my-5'>
            <label>Tai khoan</label>
            <input type="text" onChange={handleChange} name="taiKhoan" className='form-control' />
            <label>Mat khau</label>
            <input type="pass" onChange={handleChange} name="matKhau" className='form-control' />
            <button className='btn btn-success w-100'

            >LOGIN</button>
        </form>
    )
}
