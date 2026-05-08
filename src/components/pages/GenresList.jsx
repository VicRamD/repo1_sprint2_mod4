import { useGenreContext } from '../../contexts/GenreContext';
import GenreCard from '../cards/GenreCard';

const GenresList = () => {
    const { genres } = useGenreContext();

    if(!genres) return(
      <div>
          <div className='p-5'>Cargando...</div>
      </div>);

  return (
    <div className='px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {genres.map((genre, index )=> <GenreCard key={index} genre={genre}/>)}
    </div>
  )
}

export default GenresList