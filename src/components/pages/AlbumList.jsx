import { useAlbumContext } from "../../contexts/AlbumContext";

import AlbumCard from "../cards/AlbumCard";
import { Link } from "react-router-dom";

const AlbumList = () => {
    const {albums} = useAlbumContext();

    if(!albums) return(
      <div>
          <div className='p-5'>Cargando...</div>
      </div>);

    return (
      <div className='px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {albums.map((album, index) => <AlbumCard key={index} album={album}/>)}
      </div>
  )
}

export default AlbumList