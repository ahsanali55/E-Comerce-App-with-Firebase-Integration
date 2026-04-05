import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { AuthActions } from '../../../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../utils/firebaseConfig';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLagout = async() => {
    dispatch(AuthActions.logout());
    await signOut(auth)
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
