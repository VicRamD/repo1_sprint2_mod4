import React from 'react'
import { Link } from 'react-router-dom';
import { useGenreContext } from '../../contexts/GenreContext';
import GenreCard from './GenreCard';

const GenreBoard = () => {
    const { genres } = useGenreContext();
  return (
    <div>
        <h2 className='text-2xl'>Genero</h2>
        <Link to="/añadir" className='inline-block bg-emerald-500 border-2 border-solid border-black p-2 m-2'>Añadir un genero</Link>
        {genres.map(genre => <GenreCard genre={genre}/>)}
    </div>
  )
}

export default GenreBoard