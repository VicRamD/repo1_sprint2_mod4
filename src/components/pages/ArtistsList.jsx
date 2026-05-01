import { useArtistContext } from "../../contexts/ArtistContext"

import ArtistCard from "../cards/ArtistCard";
import { Link } from "react-router-dom";

const ArtistsList = () => {
    const {artists} = useArtistContext();

    if(!artists) return(
      <div>
          <h2 className='text-2xl'>Artista</h2>
          <Link to="create" className='inline-block bg-emerald-500 border-2 border-solid border-black p-2 m-2'>Añadir un artista</Link>
          <div className='p-5'>Cargando...</div>
      </div>);

  return (
    <div className='px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {artists.map((artist, index) => <ArtistCard key={index} artist={artist}/>)}
    </div>
  )
}

export default ArtistsList