"use client"
import axios from 'axios';
import { useEffect, useState } from 'react'

const Filters = ({price, setPrice, handleprice, checkedlist, setCheckedlist}) => {
    const [list, setList]= useState([]);

    const fetchfacilities= async()=>{
        try{
          const {data}= await axios.get("/api/facilities");
          // console.log(data);
          if(data?.facilities){
            setList(data.facilities);
          }
        }
        catch(err){
            console.log(err)
        }
    }

    const handlechecklist=(e)=>{
      let newlist=[];
      if(e.target.checked){
        newlist.push(e.target.value);
        setCheckedlist(newlist);
        return;
      }
      newlist= newlist.filter((i) => i!== e.target.value);
      setCheckedlist(newlist);
    }

    useEffect(()=>{
      console.log("runn");
      fetchfacilities();
    }, [])

  return (
    <>
      <div className='border-2 border-red-400 rounded-md m-5 h-auto py-10 px-3'>
        <label htmlFor='price' className='text-xl font-bold mr-3'>
            Price:{" "}
        </label>
        <input type='range' name='price' id='price' min={10000} max={2000000} onChange={(e)=>{
          setPrice(e.target.value)
        }} defaultValue={price? price: 0}></input>
        <span className='ml-5'>&#8377;{price? price: ""}</span>
        <div>
          <button className='w-28 h-10 my-3 cursor-pointer bg-green-300'  onClick={handleprice}>Search</button>
        </div>
        <div className='my-10'>
            <h3 className='text-xl font-bold my-3'>Filter by Facilities: </h3>
            {
              list?.map((e)=>{
                return (
                  <p key={e} className='grid grid-cols-4 my-3'>
                      <label htmlFor='checkbox' className='col-span-2'>{e}</label>
                      <input type='checkbox' name='checkbox' id='checkbox' value={e} className='w-5 h-5 ml-3 col-span-1' onChange={handlechecklist}></input>
                  </p>
                )
              })
            }
            
        </div>
      </div>
    </>
  )
}

export default Filters
