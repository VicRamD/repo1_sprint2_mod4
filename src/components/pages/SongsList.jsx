import { useSongContext } from "../../contexts/SongContext";

import SongCard from "../playlist/SongCard";
import { Link } from "react-router-dom";

const SongsList = () => {
    const {songs} = useSongContext();

    if(!songs) return(
      <div>
          <div className='p-5'>Cargando...</div>
      </div>);

    return (
      <div className='px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {songs.map((song, index) => <SongCard key={index} song={song}/>)}
      </div>
  )
}

export default SongsList;