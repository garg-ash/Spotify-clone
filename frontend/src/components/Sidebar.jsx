import React from 'react'

function Sidebar() {
  return (
    <div className='text-white w-[25%] flex-col gap - 2 p-2 h-full'>
        <div className='library w-full bg-zinc-800 rounded-xl m-2 p-3 flex justify-between'>
          <div className='library-image h-10 w-10 bg-zinc-800 rounded-full'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXVvFiU5rqXDxkF9qWof-JUxWb6JDK2mKlw&s" className='img-fluid rounded-full cursor-pointer' alt="" />
          </div>
          <div>
           <h5 className='text-gray-400 hover:text-white cursor-pointer text-left'>Your Library</h5>  
           </div>
          <div className='plus' text-white>
            +
          </div>
        </div>
        
    </div>
  )
}

export default Sidebar