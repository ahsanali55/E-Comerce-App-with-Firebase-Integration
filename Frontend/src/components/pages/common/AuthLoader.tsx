import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/hook';
import { logout, setCredentials } from '../../../store/authSlice';
import API from '../../../Api/axios';

function AuthLoader() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadUser = async () => {
      const token: string | null = localStorage.getItem("token");
      if (!token){
        dispatch(logout());
        return;
      }
      try{
        const response = await API.get("/user/profile");
        dispatch(setCredentials({
          user: response.data.user,
          token,
        }))
      } catch (error) {
        dispatch(logout());
        localStorage.removeItem("token");
      }
    }
    loadUser();
  })

  return null;
}

export default AuthLoader;
