import { createContext, useContext } from "react";
import { usePlaylist, usePlaylistModal } from "../hooks/usePlaylist";

//Crear el contexto
const PlaylistContext = createContext();

//Crear el proveedor del contexto
export const PlaylistProvider = ({ children }) => {
    const {isModalOpen, open, close, toggle} = usePlaylistModal();
    const { playlist, addToPlaylist, removeFromPlaylist } = usePlaylist("sz-playlist");

    return(
        <PlaylistContext.Provider value={{isModalOpen, open, close, toggle, playlist, addToPlaylist, removeFromPlaylist}}>
            { children }
        </PlaylistContext.Provider>
    );
}

export const usePlaylistContext = () => {
    return useContext(PlaylistContext);
}