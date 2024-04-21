import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: ''
      });
      const [registrationSuccess, setRegistrationSuccess] = useState(false);

      useEffect(()=>{
        if (registrationSuccess) {
            const timeoutId = setTimeout(() => {
              navigator('/');
            }, 1000);
      
           
            return () => clearTimeout(timeoutId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[registrationSuccess])

      const handleChange = (e) =>{
        const {name , value} = e.target
        setRegisterData({...registerData,[name]:value })
      }

      const navigator = useNavigate();
      const handleSubmit = async () => {

        const url = 'http://localhost:4000/users/register/'
        axios.post(url, registerData)
        .then((response)=>{
            if(response && response.status === 201){
                toast.success("User Registerd Succesfully !!")
                setRegistrationSuccess(true)
                
            }
        })
        .catch((err)=>{
           
            if(err.response && err.response.status === 400){
                toast.error(err.response.data.error)
            }
          else{
            toast.error(err.response.data.error)
          }
          console.log(err);
        })
       
        

    
        //  navigator('/')
        
      };
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-slate-300 bg'>
        <Toaster/>
            <div className='w-full m-5 md:m-0 flex flex-col justify-center items-center md:w-2/5'>
                <p className='text-white text-3xl mb-5 underline underline-offset-8'>REGISTER PAGE</p>
                <div className='w-full mb-5'>
                    <label htmlFor="username" className='font-normal md:text-xl text-white'>Username</label>
                    <input name='username' onChange={handleChange} type="text" className='w-full block border border-2 focus:outline-none p-1 rounded-md bg-slate-200 my-1 md:text-xl' placeholder='Enter your Username' />
                </div>
                <div className='w-full mb-5'>
                    <label htmlFor="username" className='font-normal md:text-xl text-white'>Email</label>
                    <input name='email' onChange={handleChange} type="email" className='w-full block border border-2 focus:outline-none p-1 rounded-md bg-slate-200 my-1 md:text-xl' placeholder='Enter your Username' />
                </div>
                <div className='w-full mb-5'>
                    <label htmlFor="username" className='font-normal md:text-xl text-white'>Password</label>
                    <input name='password' onChange={handleChange} type="text" className='w-full block border border-2 focus:outline-none p-1 rounded-md bg-slate-200 mt-1 md:text-xl' placeholder='Enter your Password' />
                </div>

                <div className='w-full mb-5'>
                <button onClick={handleSubmit} className='p-1 md:p-2 text-lime-50 bg-green-500 w-full rounded-md '>Register</button>
                </div>
                <Link to='/' className='text-white underline underline-offset-3'>Sign In</Link>

            </div>


        </div>
  )
}

export default Register
