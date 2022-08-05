import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const HomeScreen = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>Email: {user && user.email}</p>
      <p>Name: {user && user.displayName}</p>

      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
  )
}

export default HomeScreen