import { useState, useEffect } from 'react';

import PlaylistModal from './PlaylistModal'
import SongList from './SongList';

const Main = ({isModalOpen, setIsModalOpen}) => {

  //estado de la playlist
  const [playlist, setPlaylist] = useState([]);

  //recuperar lista del local storage (si existe) con useEffect
  useEffect(()=>{
    const savedPlaylist = localStorage.getItem('playlist');
    let playlistParsed = [];
    if(savedPlaylist){
          playlistParsed = JSON.parse(savedPlaylist);
    }
    setPlaylist(playlistParsed);
  }, []);
  

  //añadir a playlist
  const addToPlaylist = (song) => {
    //console.log(song)
    setPlaylist([...playlist, song]);
    //console.log(playlist);
    localStorage.setItem("playlist", JSON.stringify([...playlist, song]));
  };

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