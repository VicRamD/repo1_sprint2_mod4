import React from 'react'
import { Link } from 'react-router-dom';
import { useArtistContext } from '../../contexts/ArtistContext';
import ArtistCard from './ArtistCard';

const ArtistBoard = () => {

    const {artists} = useArtistContext();

  return (
    <div>
        <h2 className='text-2xl'>Artista</h2>
        <Link to="/añadir" className='inline-block bg-emerald-500 border-2 border-solid border-black p-2 m-2'>Añadir un artista</Link>
        {artists.map(artist => <ArtistCard artist={artist}/>)}
    </div>
  )
}

export default ArtistBoard