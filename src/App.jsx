import { useState, useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import PlaylistModal from './components/PlaylistModal'
import SongList from './components/SongList';

function App() {

  //estado de la playlist
  const [playlist, setPlaylist] = useState([]);

  //estado del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  //añadir a playlist
  const addToPlaylist = (song) => {
    console.log(song)
    setPlaylist([...playlist, song]);
    console.log(playlist);
    localStorage.setItem("playlist", JSON.stringify([...playlist, song]));
  };

  //quitar de playlist
  /*const removeFromPlaylist = (id) => {
    const updatedList = playlist.filter(song => song.id !== id);
    setPlaylist(updatedList);
    localStorage.setItem("playlist", JSON.stringify(updatedList));
  }; */

  //guardar en local storage
  useEffect(() => {
    const savedplaylist = JSON.parse(localStorage.getItem("playlist")) || [];
    setPlaylist(savedplaylist);
  }, []);


  return (
    <>
      <div className="h-screen flex flex-col">
        <Header setIsModalOpen={setIsModalOpen}/>
        {isModalOpen && <PlaylistModal playlist={playlist} onClose={() => setIsModalOpen(false)} />}
        <SongList  onAdd={addToPlaylist}/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
