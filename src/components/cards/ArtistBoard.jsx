import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useArtistContext } from '../../contexts/ArtistContext';
import ArtistCard from './ArtistCard';

const ArtistBoard = () => {

  const {artists} = useArtistContext();

  if(!artists) return(
      <div>
          <h2 className='text-2xl'>Artista</h2>
          <Link to="create" className='inline-block bg-emerald-500 border-2 border-solid border-black p-2 m-2'>Añadir un artista</Link>
          <div className='p-5'>Cargando...</div>
      </div>);

  return (
    <div>
        <h2 className='text-2xl'>Artista</h2>
        <Link to="create" className='inline-block bg-emerald-500 border-2 border-solid border-black p-2 m-2'>Añadir un artista</Link>
        <Outlet/>
        {artists.map((artist, index) => <ArtistCard key={index} artist={artist}/>)}
    </div>
  )
}

export default ArtistBoard