import { useEffect, useState } from "react";

export const usePlaylistModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const open = () => setIsModalOpen(true);
    const close = () => setIsModalOpen(false);
    const toggle = () => setIsModalOpen((prev) => !prev);

    return {isModalOpen, open, close, toggle}
}

export const usePlaylist = (listName) => {
    //listName es el nombre con el que está guardado en localStorage

     //estado de la playlist
    //recuperar lista del local storage (si existe)
    const [playlist, setPlaylist] = useState(() => {
        const saved = localStorage.getItem(listName);
        return saved ? JSON.parse(saved) : [];
    });


      //añadir a playlist
  const addToPlaylist = (song) => {
    //console.log(song)
    //Revisa si la canción ya está en la playlist para no agregarla
    const songAlreadyInPlaylist = playlist.find( track => track.id === song.id);
    if(!songAlreadyInPlaylist){
      setPlaylist([...playlist, song]);
      //localStorage.setItem("playlist", JSON.stringify([...playlist, song]));
    } 
    /*else {
      console.log("Song already in playlist");  
    }*/
    //console.log(playlist);
    
  };

  //quitar de playlist
  /*const removeFromPlaylist = (id) => {
    const updatedList = playlistParsed.filter(song => song.id !== id);
    setPlaylist(updatedList);
    localStorage.setItem("playlist", JSON.stringify(updatedList));
  }; */

  const removeFromPlaylist = (id) => setPlaylist(prev => prev.filter(song => song.id !== id));

  //Guardar en Local Storage cuando cambie
  useEffect(() => {
    localStorage.setItem(listName, JSON.stringify(playlist));
  }, [playlist, listName]);

  return {playlist, setPlaylist, addToPlaylist, removeFromPlaylist}
}
