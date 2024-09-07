import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './components/PlayerContext'

function App() {

  const {audioRef, track} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <Header />
     <div className='h-[90%] flex'>
      <Sidebar />
      <Display />
     </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App