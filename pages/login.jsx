"use client";
import Head from 'next/head'
import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Login = () => {
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const [login, setLogin]= useState(false);

    const router= useRouter();

    const handlesignup=async()=>{
        const res= await axios.post("/api/user/register", {
            name,
            email,
            password,
        });
        if(res?.data){
            Cookies.set('user', res.data.token, {expires: 7});
            alert(res.data.msg);
            router.back();
        }
    }

    const handlelogin=async()=>{
        const res= await axios.post('/api/user/login', {
            email,
            password,
        });
        console.log(res.data);
        if(res?.data){
            Cookies.set('user', res.data.token, {expires: 7});
            alert(res.data.msg);
            router.back();
        }
    }

    const handletoggle=()=>{
        setLogin(!login);
    }

  return (
    <div>
        <Head>
            <title>OYO LOGIN</title>
        </Head>
      <div className='flex justify-center items-center h-screen relative bg-login-background bg-no-repeat bg-cover opacity-80'>
        <div className='absolute top-10 px-20 flex items-center w-full text-white'>
            <h2 className='text-4xl font-bold mr-5 '>OYO</h2>
            <p className='font-bold '>Hotels and homes across 800 cities, 24+ countries</p> 
        </div>
        <div className='flex justify-center mx-20 w-9/12 items-center'>
            <div className='w-9/12 px-15 mx-10 text-white'>
                <p className='font-bold text-5xl text-justify'>There's a smarter way to OYO around</p>
                <p className='text-xl text-justify mt-5'>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
            </div>
            <div className='ml-20 w-10/12 border-none pb-20 bg-white my-50'>
                <p className='h-10 px-10 font-bold text-lg text-white flex items-center bg-gradient-to-r from-red-400 to bg-red-500'>
                    Sign up & Get ₹500 OYO Money 
                </p>
                <div className='px-10'>
                    <h3 className='font-bold text-3xl my-5'>
                        Login / Signup
                    </h3>
                    <p className='font-bold text-lg mb-3'>
                        Please enter your phone number to continue
                    </p>
                    {login ? ("") : (
                        <input type="text" placeholder='Enter your name....' className='outline-none border border-black px-3 py-1 w-96 h-10 my-3' onChange={(e)=> setName(e.target.value)}/>
                    )}
                    <input type="email" placeholder='Enter your email....' className='outline-none border border-black px-3 py-1 w-96 h-10 my-3' onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password" placeholder='Enter your password....' className='outline-none border border-black px-3 py-1 w-96 h-10 my-3' onChange={(e)=> setPassword(e.target.value)}/>
                    <button type='submit' className='w-96 h-14 text-lg font-bold bg-red-300 hover:cursor-pointer hover:bg-red-400 my-5 rounded-lg' onClick={login ? handlelogin: handlesignup}>{login ? "Login": "Sing Up"}</button>
                    <p className='my-1 text-lg'>
                        <span>{login ? "Don't have an account ?" : "Already have an account ?"}</span>
                        <span className='ml-1 text-red-500 border-b border-red-400 pb-1 hover:cursor-pointer' onClick={handletoggle}>{login? "Sign Up": "Login"}</span>
                    </p>
                </div>    
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
