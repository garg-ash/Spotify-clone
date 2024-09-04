import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  return (
    <div className='h-screen bg-black'>
      <Header />
     <div className='h-[90%] flex'>
      <Sidebar />

     </div>
    </div>
  )
}

export default App