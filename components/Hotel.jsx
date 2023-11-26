"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hotel = ({e}) => {
  return (
    <div className='border-2 border-red-400 rounded-lg h-90 w-full mb-5 p-5'>
      <div className='flex'>
        <Image src={e?.banner}
        width={200} height={200} className='w-96 h-large-box mr-3'></Image>
        <div className='flex flex-col justify-between'>
            {e? e.gallery?.map((ele)=>{
              return (
                <Image  key={ele} src={ele}
            width={200} height={200} className='w-28 h-14'></Image>
              )
            })
            : ""}
        </div>
        <div className='ml-5'>
            <h2 className='font-bold text-2xl line-clamp-1'>{e?.name}</h2>
            <p className='text-justify text-lg my-5'>{e?.description}</p>
            <div className='text-xl my-5'>
                <span className='font-bold'>Facilities : </span>
                <ul className='flex'>
                  {e ? 
                    e.facilities?.map((ele)=>{
                      return(
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
            </div>
            <div className='flex items-center'>
                <button className='w-60 h-14 rounded-lg text-lg bg-blue-400'>Price : &#8377; {e?.price}</button>
                <Link href={`/hotels/${e?._id}`} className='text-xl font-bold text-red-400 ml-10'>See Deatils</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel
