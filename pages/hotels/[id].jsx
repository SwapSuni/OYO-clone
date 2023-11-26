"use client"
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'

const SingleHotel = ({hotel}) => {
  const [auth, setAuth]= useState(false);

  useEffect(()=>{
    const cookie= Cookies.get('user');
    if(cookie){
      setAuth(true);
      return;
    }
    setAuth(false);
  },[])

  return (
    <>
    <Head>
      <title>{hotel?.name}</title>
    </Head>
    <div className='w-7/12 mx-auto my-10'>
      <Image src={hotel?.banner}
        width={2000} height={2000} className='w-full h-large-box mx-auto my-5'></Image>
      <div className=''>
        <h3 className='font-bold text-2xl'>{hotel?.name}</h3>
        <p className='font-bold text-xl my-3 text-justify text-slate-500'>{hotel?.description}</p>
        <button className='w-60 h-14 rounded-lg text-lg bg-blue-400 mb-5'>Price : &#8377; {hotel?.price}</button>
        <p className='text-2xl font-bold'>Facilities: </p>
        <ul className='text-xl flex justify-between'>
          {
            hotel? hotel.facilities?.map((ele)=>{
              return (
                <li key={ele.name} className='mr-10 mb-3 flex items-center'>
                  <span>
                    <Image src={ele.img} height={200} width={200} className='w-10 h-10 rounded-full'>
                    </Image>
                  </span>
                  <span className='ml-5'>{ele.name}</span>
                </li>
              )
            })
          : ""}
        </ul>
        {
          auth? 
          <button className='w-60 h-14 rounded-lg text-lg bg-red-300 my-5'>Book Now</button>
          : <span className='text-2xl'>Please <Link href={'/login'} className='text-blue-400'>Login In</Link> to get new offers !</span>
        }
      </div>  
    </div>
    </>
  )
}

export async function getServerSideProps(ctx){
  const res= await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data= await res.json();
  // console.log(data);
  return{
    props:{
      hotel:data.hotel,
    }
  }
}

export default SingleHotel
