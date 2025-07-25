import React from 'react'
import Sidebar from '../components/Home/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex h-[98vh] gap-4'>
        <div className='w-1/6 border border-gray-300 rounded-xl p-4 flex flex-col justify-between bg-gray-100'>
            <Sidebar />
        </div>
        <div className='w-5/6 border border-gray-300 rounded-xl p-4 bg-gray-100'>
            <Outlet />
        </div>
    </div>
  )
}

export default Home