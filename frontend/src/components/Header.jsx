import React from 'react'

function Header() {
  return (
    <div>
        <div className='header py-5 px-5 flex justify-between mx-3'>
            <div className='logo text-white'>
                <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" className='h-11 bg-black cursor-pointer img-fluid' alt="" />
            </div>
         <div className='search flex justify-center'>
            <div className='home_box h-12 w-12 rounded-full bg-zinc-800  cursor-pointer mx-3'>
              <img src="https://cdn-icons-png.flaticon.com/128/16019/16019931.png" alt="" />
            </div> 
            <input type="search" placeholder='What do you want to play' className='w[40%] p-2 rounded-xl bg-zinc-800 text-white' />
          </div> 
          <div className='register'> 
          <button className='bg-black text-gray-500 hover:text-white'>Sign Up</button>
          <button className='bg-white text-black text-lg font-semibold rounded-2xl px-6 py-2 ml-3 hover:ease-in duration-300 ...'>LogIn</button>
        </div>  
        </div>
        
    </div>
  )
}

export default Header