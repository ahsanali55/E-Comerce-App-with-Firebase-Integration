import React from 'react'
import { Link } from 'react-router-dom'

const LeftFooter = () => {
  return (
   <div className='w-full flex flex-col items-start space-y-5'>
     <div className=' w-40 border-2'>
      <Link to="/">
      <div className=' px-2 py-1 flex gap-2 '>
        <h1 className='text-white bg-[#00BAFC] font-bold px-2'>AHSAN </h1>
        <h2 className='text-[#00BAFC]  font-bold'>STORE</h2>
      </div>
      </Link>
      
    </div>
    <p className='text-gray-300'>Welcome to Thapa EcomStore, your ultimate destination for cutting-edge gadgets!</p>
    <img src="/images/cards.png" className='w-40' alt="" />
   </div>
  )
}

export default LeftFooter
