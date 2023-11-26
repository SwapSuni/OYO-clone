import React from 'react'

const Header2 = () => {
    const list=[
        {
            name:"Banglore",
        },
        {
            name:"Chennai",
        },
        {
            name:"Delhi",
        },
        {
            name:"Gurgaon",
        },
        {
            name:"Hyderabad",
        },
        {
            name:"Kolkata",
        },
        {
            name:"Mumbai",
        },
        {
            name:"Pune",
        },
        {
            name:"Noida",
        },
        {
            name:"All Cities",
        }
    ]
  return (
    <div>
        <div className='flex justify-between bg-slate-100 px-4 h-10 w-full items-center'>
            {list.map((e)=>{
                return (
                    <span key={e} className='mx-3'>{e.name}</span>
                )
            })}
        </div>
      
    </div>
  )
}

export default Header2
