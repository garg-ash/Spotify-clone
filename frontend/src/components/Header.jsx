import React from 'react'
import {assets} from '../assets/assets'

function Header() {
  return (
    <div>
        <div className='header py-5 px-5 flex justify-between mx-3'>
            <div className='logo text-white'>
                <img src={assets.spotify_logo} className=' img-fluid' alt="" />
            </div>
         <div className='search flex justify-center'>
            <div className='home_box h-12 w-12 rounded-full bg-zinc-800 cursor-pointer mx-3'>
              <img src={assets.home_icon} className='h-full w-full img-fluid rounded-full' alt="" />
            </div> 
            <input type="search" placeholder='What do you want to play' className='w[40%] p-2 rounded-xl bg-zinc-800 text-white' />
          </div> 
          <div className='register'> 
          <button className='bg-black text-gray-500 hover:text-white'>Sign Up</button>
          <button className='bg-white text-black text-lg font-semibold rounded-2xl px-6 py-2 ml-3 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 ...'>LogIn</button>
        </div>  
        </div>
        
    </div>
  )
}

export default Header