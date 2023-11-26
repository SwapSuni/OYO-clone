import Filters from '@/components/Filters'
import Header1 from '@/components/Header1'
import Hotel from '@/components/Hotel'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Hotels = ({hotels}) => {
  const [price, setPrice]= useState(10000);
  const [list, setList]= useState([]);
  const [checkedlist, setCheckedlist]= useState([]);

  const handleprice= async()=>{
    const {data}= await axios.get(`/api/facilities/range?price=${price}`);
    if(data?.hotels){
      setList(data.hotels);
    }
  }

  const handlechecklist=async()=>{
    const {data}= await axios.get(`/api/facilities/search?val=${checkedlist}`);
    if(data?.hotels){
      let newArr=data.hotels;
      setList(newArr);
    }
  }

  useEffect(()=>{
    if(checkedlist){
      handlechecklist();
    }
  },[checkedlist])

  return (
    <>
        <Header1></Header1>
        <div className='grid grid-cols-12'>
          <div className='col-span-2'>
            <Filters price={price} setPrice={setPrice} handleprice={handleprice} checkedlist={checkedlist} setCheckedlist={setCheckedlist}></Filters>
          </div>
          <div className='col-span-10'>
            {
              list? list.map((e)=>{
                return (
                  <div className='my-5' key={e._id}>
                    <Hotel e={e}></Hotel>
                  </div>
                )
              }) : hotels? hotels.map((e)=>{
                return (
                  <div className='my-5' key={e._id}>
                    <Hotel e={e}></Hotel>
                  </div>
                )
              }) : ""
            }
          </div>
        </div>
    </>
  )
}

export async function getServerSideProps(ctx){
  const res= await fetch(`${process.env.BASE_URL}/api/hotels?location=${ctx.query.location}`);
  const data= await res.json();
  // console.log(data);

  return{
    props:{
      hotels:data.hotels? data.hotels : data.allhotels
    }
  }
}

export default Hotels
