import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const handleLagout = async() => {
    
    
    navigate('/');
  }
  return (
    <>
    <div className='flex items-center gap-2 hover:bg-[#F5F5F5] cursor-pointer p-2 rounded-md' onClick={handleLagout}>
        <CgProfile className='text-2xl' />
      <h1>Logout</h1>
    </div >
    </>
  )
}

export default Logout

