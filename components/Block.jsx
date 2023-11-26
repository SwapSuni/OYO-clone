import Image from 'next/image'
import React from 'react'

const Block = ({title, para}) => {
  return (
    <div className='flex h-full w-100 item-centre mx-5'>
      <Image src={"/job.jpg"} width={100} height={100} className='w-10 h-10 mt-2'></Image>
      <div className='ml-3'>
        <h3 className='font-weight:600 mt-2'>{title}</h3>
        <p className='text-sm text-stone-400'>{para}</p>
      </div>
    </div>
  )
}

export default Block
