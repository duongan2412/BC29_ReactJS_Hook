import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../services/user'
import { setUserInfoAction } from '../../store/action/user.action';
import { USER_INFO_KEY } from "../../constants/common";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        // giúp duy trì trạng thái đăng nhập
        localStorage.setItem(USER_INFO_KEY, JSON.stringify(result.data.content));
        dispatch(setUserInfoAction(result.data.content));
        navigate("/");
        // console.log(result);
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
