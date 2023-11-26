"use client"

import Link from "next/link"
import { useState } from "react"

const Header3 = () => {
  const [location, setLocation]= useState("");
  return (
    <div>
      <div className='bg-gradient-to-r from-red-600 to-red-400 h-40 w-full'>
        <div className='p-5'>
            <h2 className='text-white font-bold text-3xl text-center'>Over 157,000 hotels and homes across 35 countries</h2>
            <div className='flex justify-center my-5 ml-12'>
                <input type='text' placeholder='Search' className='w-96 h-10 outline-none px-3 text-lg border-r-2 border-slate-200' onChange={(e)=>{
                  setLocation(e.target.value)
                }}></input>
                {/* <input type='text' placeholder='Search' className='h-10 outline-none px-3 text-lg border-r-2 border-slate-200 col-span-1'></input>
                <input type='text' placeholder='Search' className='h-10 outline-none px-3 text-lg col-span-1'></input> */}
                <Link href={`/hotels?location=${location}`}>
                <button type="submit" className='h-10 py-1 px-10 text-white font-bold text-lg bg-green-500 hover:bg-green-600 hover:cursor-pointer text-center'>Search</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header3
