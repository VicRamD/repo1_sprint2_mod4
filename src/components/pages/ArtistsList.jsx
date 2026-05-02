import { useArtistContext } from "../../contexts/ArtistContext"

import ArtistCard from "../cards/ArtistCard";
import { Link } from "react-router-dom";

const ArtistsList = () => {
    const {artists} = useArtistContext();

    if(!artists) return(
      <div>
          <div className='p-5'>Cargando...</div>
      </div>);

    return (
      <div className='px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {artists.map((artist, index) => <ArtistCard key={index} artist={artist}/>)}
      </div>
  )
}

export default ArtistsList