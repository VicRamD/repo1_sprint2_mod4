import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//Crear el contexto
const ArtistContext = createContext();

//Crear el proveedor del contexto
export const ArtistProvider = ({ children }) => {
    const [artists, setArtists] = useState();
    const [loading, setLoading] = useState(false);

    //Get
    const fetchArtists = async () => {
        setLoading(true);
        try {
            const {data} = await axios.get("https://sound-zone-api-sp5.onrender.com/api/artists");
            console.log(data)
            setArtists(data);
        } catch (error) {
            console.error("Error al hacer fecth al endpoint de artistas", error);
        } finally {
            setLoading(false);
        }
    }

    //Post
    const createArtist = async (artist) => {
        const {data} = await axios.post("https://sound-zone-api-sp5.onrender.com/api/artists/agregar", artist,
        );
        setArtists((prev)=>[...prev, data]);
    }

    useEffect(()=>{
        fetchArtists();
    }, []);

    return(
        <ArtistContext.Provider value={{artists, loading, createArtist}}>
            { children }
        </ArtistContext.Provider>
    );
}

export const useArtistContext = () => {
    return useContext(ArtistContext);
}