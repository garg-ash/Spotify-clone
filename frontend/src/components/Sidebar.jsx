import React from 'react'
import { assets } from '../assets/assets'

function Sidebar() {
  return (
    <div className='text-white w-[24%] p-2 bg-zinc-800 rounded-xl my-6 mx-3'>
        <div className='library w-full p-3 flex justify-between'>
          <div className='library-image w-7 bg-zinc-800 rounded-full flex justify-start'>
            <img className='img-fluid rounded-full cursor-pointer' src={assets.stack_icon} alt="" />
           <p className='text-gray-400 hover:text-white cursor-pointer'>Your Library</p>  
          </div>
          
           
          <div className='plus h-6 w-6' >
            <img src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className='create_playlist w-full my-2 bg-zinc-900 rounded-xl'>
          <h6 className='p-3 font-bold'>Create Your First Playlist</h6>
          <h6 className='px-3'>it's easy, we'll help you</h6>
          <button className='bg-white text-black py-1 px-4 rounded-xl m-3 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 ...'>Create Playlist</button>
        </div>
        <div className='create_playlist w-full my-2 bg-zinc-900 rounded-xl'>
          <h6 className='p-3 font-bold'>Let's find some podcasts to follow</h6>
          <h6 className='px-3'>We will keep you updated on new episodes</h6>
          <button className='bg-white text-black py-1 px-4 rounded-xl m-3 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 ...'>Browse Podcasts</button>
        </div>
    </div>
  )
}

export default Sidebar