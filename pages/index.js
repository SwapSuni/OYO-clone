import Footer from '@/components/Footer'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <Head>
        <title>OYO</title>
      </Head>
      <Header1></Header1>
      <Header2></Header2>
      <Header3></Header3>
      <div className='mx-15 px-10'>

        <div className='my-10 py-5'>
          <Image src={"/banner1.avif"} alt='banner1' width={200} height={200} className='h-70 w-full'></Image>
        </div>
        <div className='mb-14'>
          <Image src={"/banner2.avif"} alt='banner2' width={200} height={200} className='h-30 w-full'></Image>
        </div>

        <Header4></Header4>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default page