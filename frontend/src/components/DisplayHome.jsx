import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albumsData, songsData } from '../assets/assets'
import SongItem from './SongItem'

function DisplayHome() {
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
      <h1 className='text-2xl my-5 font-bold'>Featured Charts</h1> 
      <div className='flex overflow-auto'>
        {albumsData.map((item, index)=>(<AlbumItem key = {index} name = {item.name} desc = {item.desc} id = {item.id} image = {item.image}/>))}
      </div>
    </div>
    <div className='mb-4'>
      <h1 className='text-2xl my-5 font-bold'>Today's hits</h1> 
      <div className='flex overflow-auto'>
        {songsData.map((items, index)=>(<SongItem key={index} name={items.name} desc={items.desc} id={items.id} image={items.image}/>))}
      </div>
    </div>
    </>
  )
}

export default DisplayHome