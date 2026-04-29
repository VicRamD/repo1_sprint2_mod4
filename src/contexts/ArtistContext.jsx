import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//Crear el contexto
const ArtistContext = createContext();

//Crear el proveedor del contexto
export const ArtistProvider = ({ children }) => {
    const [artists, setArtists] = useState();
    const [loading, setLoading] = useState(false);

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

    useEffect(()=>{
        fetchArtists();
    }, []);

    return(
        <ArtistContext.Provider value={{artists, loading}}>
            { children }
        </ArtistContext.Provider>
    );
}

export const useArtistContext = () => {
    return useContext(ArtistContext);
}