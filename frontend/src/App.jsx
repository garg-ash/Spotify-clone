import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Player from './components/Player'
import Display from './components/Display'

function App() {
  return (
    <div className='h-screen bg-black'>
      <Header />
     <div className='h-[90%] flex'>
      <Sidebar />
      <Display/>
     </div>
      <Player />
    </div>
  )
}

export default App