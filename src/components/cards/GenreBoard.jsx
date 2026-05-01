import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useGenreContext } from '../../contexts/GenreContext';
import GenreCard from './GenreCard';

const GenreBoard = () => {
    const { genres } = useGenreContext();

  if(!genres) return(
    <div>
        <h2 className='text-2xl'>Genero</h2>
        <Link to="/añadir" className='inline-block bg-emerald-500 border-2 border-solid border-black p-2 m-2'>Añadir un genero</Link>
        <div className='p-5'>Cargando...</div>
    </div>);

  return (
    <div>
        <h2 className='text-2xl'>Genero</h2>
        <Link to="/añadir" className='inline-block bg-emerald-500 border-2 border-solid border-black p-2 m-2'>Añadir un genero</Link>
        <div className='px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {genres.map((genre, index )=> <GenreCard key={index} genre={genre}/>)}
        </div>
        
    </div>
  )
}

export default GenreBoard