import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";

//Crear el contexto
const ArtistContext = createContext();

//Crear el proveedor del contexto
export const ArtistProvider = ({ children }) => {
    const [artists, setArtists] = useState();
    const [loading, setLoading] = useState(false);

    //estado para hacer fetch a la lista de artistas cuando cambia
    const [hasChanged, setHasChange] = useState(true);

    //GET
    const fetchArtists = async () => {
        setLoading(true);
        try {
            const {data} = await axios.get("https://sound-zone-api-sp5.onrender.com/api/artists");
            toast.success(`Data fetch successfully`);
            console.log(data)
            setArtists(data);
            setHasChange(false);
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
    }

    const getArtistById = async (id) => {
        try {
            setLoading(true);
            const { data } = await axios.get(`https://sound-zone-api-sp5.onrender.com/api/artists/${id}`);    
            toast.success(`Data fetch successfully`);
            return data;
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
        
    };

    //POST
    const createArtist = async (artist) => {
        try {
            setLoading(true);
            const {data} = await axios.post("https://sound-zone-api-sp5.onrender.com/api/artists/agregar", artist);
            setHasChange(true);
        setArtists((prev)=>[...prev, data]);    
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
        
    }


    //PUT
    const updateArtist = async (id, updatedData) => {
        const enpoint = `https://sound-zone-api-sp5.onrender.com/api/artists/${id}/editar`;
        try {
            setLoading(true);
            const {data} = await axios.put(enpoint, updatedData);
            //console.log("ID:", id);
            //console.log("Respuesta del servidor:", data);
            setArtists((prev)=>prev.map(artist => String(artist.id) === String(id) ? data : artist));
            setHasChange(true);
            return data;    
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
        
    }

    //DELETE
    const deleteArtist = async (id) => {
        try {
            await axios.delete(`https://sound-zone-api-sp5.onrender.com/api/artists/${id}`);
            setArtists(prev => prev.filter(artist => String(artist.id) !== String(id)));
            setHasChange(true);
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        }
    }

    useEffect(()=>{
        if(hasChanged){
            fetchArtists();
            console.log("actualizando");
        }
    }, [hasChanged]);

    return(
        <ArtistContext.Provider value={{artists, loading, createArtist, updateArtist, getArtistById, deleteArtist, setHasChange}}>
            { children }
        </ArtistContext.Provider>
    );
}

export const useArtistContext = () => {
    return useContext(ArtistContext);
}