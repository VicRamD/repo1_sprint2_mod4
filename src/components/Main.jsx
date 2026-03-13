import { useState, useEffect } from 'react';

import PlaylistModal from './PlaylistModal'
import SongList from './SongList';

const Main = ({isModalOpen, setIsModalOpen}) => {

  /* Si ya existe registro en local storage lo recupera para incializar el estado */
  const savedPlaylist = localStorage.getItem('playlist');
    let playlistParsed = [];
    if(savedPlaylist){
      playlistParsed = JSON.parse(savedPlaylist);
    }

  //estado de la playlist
  const [playlist, setPlaylist] = useState(playlistParsed);

  //añadir a playlist
  const addToPlaylist = (song) => {
    //console.log(song)
    setPlaylist([...playlist, song]);
    //console.log(playlist);
    localStorage.setItem("playlist", JSON.stringify([...playlist, song]));
  };

  //quitar de playlist
  /*const removeFromPlaylist = (id) => {
    const updatedList = playlist.filter(song => song.id !== id);
    setPlaylist(updatedList);
    localStorage.setItem("playlist", JSON.stringify(updatedList));
  }; */

  //guardar en local storage
  /*useEffect(() => {
    const savedplaylist = JSON.parse(localStorage.getItem("playlist")) || [];
    setPlaylist(savedplaylist);
  }, []); */

  return (
    <main className="pt-[8rem]">
        <h1 className='text-center font-bold text-4xl'>Escucha tus canciones favoritas</h1>
        {isModalOpen && <PlaylistModal onClose={() => setIsModalOpen(false)} setPlaylist={setPlaylist}/>}
        {/*isModalOpen && <PlaylistModal playlist={playlist} onClose={() => setIsModalOpen(false)} />*/}
        <SongList onAdd={addToPlaylist}/>
    </main>
  )
}

export default Main