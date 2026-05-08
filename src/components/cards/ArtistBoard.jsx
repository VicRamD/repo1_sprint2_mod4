import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const ArtistBoard = () => {

  return (
    <div>
        <h2 className='text-2xl'>Artista</h2>
        <Link to="create" className='inline-block bg-emerald-500 border-2 border-solid border-black p-2 m-2
        hover:bg-emerald-400 hover:text-white'>Añadir un artista</Link>
        <Outlet/>
    </div>
  )
}

export default ArtistBoard