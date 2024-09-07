import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  return (
    <>
    <div className='w-full flex justify-between align-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=> navigate(-1)} className='w-6 bg-black pl-2 rounded cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=> navigate(1)} className='w-6 bg-black pl-2 rounded cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='rounded px-2 py-1 gap-4 flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-2 py-1 rounded-2xl cursor-pointer'>Explore Premium </p>
            <p className='bg-black text-white text-[15px] px-3 py-2 rounded-2xl cursor-pointer my-2 text-center'>Install App</p>
            <p className='bg-purple-500 text-white h-7 w-7 rounded-full text-center cursor-pointer'>A</p>
        </div>
    </div>
    <div className='flex items-center gap-2'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>PodCasts</p>
        </div>
    </>
  )
}

export default Navbar