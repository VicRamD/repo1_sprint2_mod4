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

    const getArtistById = async (id) => {
        const { data } = await axios.get(`https://sound-zone-api-sp5.onrender.com/api/artists/${id}`);
        return data;
    };

    //Post
    const createArtist = async (artist) => {
        const {data} = await axios.post("https://sound-zone-api-sp5.onrender.com/api/artists/agregar", artist,
        );
        setArtists((prev)=>[...prev, data]);
    }

    useEffect(()=>{
        fetchArtists();
    }, []);

    //Put
    const updateArtist = async (id, updatedData) => {
        const enpoint = `https://sound-zone-api-sp5.onrender.com/api/artists/${id}/editar`;
        const {data} = await axios.put(enpoint, updatedData);
        console.log("ID:", id);
        console.log("Respuesta del servidor:", data);
        setArtists((prev)=>prev.map(artist => String(artist.id) === String(id) ? data : artist));
        return data;
    }

    return(
        <ArtistContext.Provider value={{artists, loading, createArtist, updateArtist, getArtistById}}>
            { children }
        </ArtistContext.Provider>
    );
}

export const useArtistContext = () => {
    return useContext(ArtistContext);
}