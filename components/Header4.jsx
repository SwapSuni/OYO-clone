"use client"

import Image from "next/image"

const Header4 = () => {
  return (
    <div className="flex my-14 border rounded-lg border-gray-300 px-5 items-center justify-between">
      <div className="flex items-center">
        <Image src={"/fire.jpg"} alt="fire" width={200} height={200} className="w-20 h-20 rounded-full"></Image>
        <div>
          <p className="font-bold text-xl">
          Get access to exclusive deals
          </p>
          <p>
          Only the best deals reach your inbox
          </p>
        </div>
      </div>
      <div className="flex py-7">
        <input type="email" placeholder="eg. swap@gmail.com" className="px-10 py-2 h-14 w-70 rounded-lg outline-none border border-gray-300" />
        <button type="submit" className="w-50 h-14 cursor-pointer text-xl text-white bg-cyan-500 rounded-lg px-5 ml-10">Notify me</button>
      </div>
    </div>
  )
}

export default Header4
