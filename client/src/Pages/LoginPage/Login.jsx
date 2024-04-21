import React, { useEffect, useState } from 'react'
import './login.css'
import { useNavigate, Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
const Login = () => {

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [loginSuccess, setLoginSuccess] = useState(false)

    const navigator = useNavigate();


    useEffect(()=>{
        if(loginSuccess){
            const timeoutId = setTimeout(()=>{
                navigator('/home')
            }, 1000)
            return () =>clearTimeout(timeoutId)
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loginSuccess])

    const handleSubmit = async () => {
        const url = 'http://localhost:4000/users/login/'
        axios.post(url, loginData)
            .then((response) => {
                if (response && response.status === 200) {
                    toast.success("Login Succesfull !!")
                    setLoginSuccess(true)
                }
            })
            .catch((err) => {
                if (err.response && err.response.status === 401) {
                    toast.error("Wrong Password !!")
                }
                else if (err.response && err.response.status === 404) {
                    toast.error("User Not Found !!")
                }
            })
        //  navigator('/home')

    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-slate-300 bg'>
            <Toaster />
            <div className='w-full m-5 md:m-0 flex flex-col justify-center items-center md:w-2/5'>
                <p className='text-white text-3xl mb-5 underline underline-offset-8'>LOGIN PAGE</p>
                <div className='w-full mb-5'>
                    <label htmlFor="username" className='font-normal md:text-xl text-white'>Username</label>
                    <input name='username' onChange={handleChange} type="text" className='w-full block border border-2 focus:outline-none p-1 rounded-md bg-slate-200 my-1 md:text-xl' placeholder='Enter your Username' />
                </div>
                <div className='w-full mb-5'>
                    <label htmlFor="username" className='font-normal md:text-xl text-white'>Password</label>
                    <input name='password' onChange={handleChange} type="text" className='w-full block border border-2 focus:outline-none p-1 rounded-md bg-slate-200 mt-1 md:text-xl' placeholder='Enter your Password' />
                </div>
                <div className='w-full mb-5'>
                    <button onClick={handleSubmit} className='p-1 md:p-2 text-lime-50 bg-green-500 w-full rounded-md '>LOGIN</button>
                </div>
                <Link to='/register' className='text-white underline underline-offset-3'>Signup</Link>
            </div>
        </div>
    )
}

export default Login
