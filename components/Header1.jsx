"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Block from './Block'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Header1 = () => {
  const [auth, setAuth]= useState(false);
  useEffect(()=>{
    const key=Cookies.get('user');
    if(key){
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);

  const router = useRouter();
  const handlelogout= ()=>{
    setAuth(false);
    Cookies.remove('user');
    router.push('/');
  }
  return (
    <>
        <div className='flex h-20 px-8 items-center justify-between border-b-2 border-stone-300'>
            <Image src={'/oyologo.png'} alt='logo' width={100} height={100} className='w-50 h-50 mx-15'></Image>
            <div className='flex'>
            <Block title={"OYO for Bussiness"} para={"Trusted by 5000 Corporates"}></Block>
            <Block title={"List your property"} para={"Start earning in 30 mins"}></Block>
            <Block title={"0124-6201611"} para={"Call us to Book now"}></Block>
            <div className="flex items-center">
                <Image src={"/job.jpg"} width={100} height={100} className='w-10 h-10 mt-2 mr-5'></Image>
                {auth? ( 
                  <h3 className='font-weight: 700 cursor-pointer' onClick={handlelogout}>Logout</h3>
                ):(
                  <Link href={"/login"}>
                    <h3 className='font-weight: 700'>Login/ Singnup</h3>
                  </Link>
                )}
            </div>
            </div>
        </div>
    </>
  )
}

export default Header1
