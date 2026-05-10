import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";

//Crear el contexto
const SongContext = createContext();

//Crear el proveedor del contexto
export const SongProvider = ({ children }) => {
    const [songs, setSongs] = useState();
    const [loading, setLoading] = useState(false);

    //estado para hacer fetch a la lista de canciones cuando cambia
    const [hasChanged, setHasChange] = useState(true);

    //GET
    const fetchSongs = async () => {
        setLoading(true);
        try {
            const {data} = await axios.get("https://sound-zone-api-sp5.onrender.com/api/songs");
            toast.success(`Data fetch successfully`);
            console.log(data)
            setSongs(data);
            setHasChange(false);
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
    }

    const getSongById = async (id) => {
        try {
            setLoading(true);
            const { data } = await axios.get(`https://sound-zone-api-sp5.onrender.com/api/songs/${id}`);    
            toast.success(`Data fetch successfully`);
            return data;
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
        
    };

    //POST
    const createSong = async (song) => {
        try {
            setLoading(true);
            const {data} = await axios.post("https://sound-zone-api-sp5.onrender.com/api/songs/agregar", song);
            setHasChange(true);
            setSongs((prev)=>[...prev, data]);    
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
        
    }


    //PUT
    const updateSong = async (id, updatedData) => {
        const enpoint = `https://sound-zone-api-sp5.onrender.com/api/songs/${id}/editar`;
        try {
            setLoading(true);
            const {data} = await axios.put(enpoint, updatedData);
            //console.log("ID:", id);
            //console.log("Respuesta del servidor:", data);
            setSongs((prev)=>prev.map(song => String(song.id) === String(id) ? data : song));
            setHasChange(true);
            return data;    
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
        
    }

    //DELETE
    const deleteSong = async (id) => {
        try {
            await axios.delete(`https://sound-zone-api-sp5.onrender.com/api/songs/${id}`);
            setSongs(prev => prev.filter(song => String(song.id) !== String(id)));
            setHasChange(true);
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        }
    }

    useEffect(()=>{
        if(hasChanged){
            fetchSongs();
            console.log("actualizando");
        }
    }, [hasChanged]);

    return(
        <SongContext.Provider value={{songs, loading, createSong, updateSong, getSongById, deleteSong, setHasChange}}>
            { children }
        </SongContext.Provider>
    );
}

export const useSongContext = () => {
    return useContext(SongContext);
}