import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";

//Crear el contexto
const AlbumContext = createContext();

//Crear el proveedor del contexto
export const AlbumProvider = ({ children }) => {
    const [albums, setAlbums] = useState();
    const [loading, setLoading] = useState(false);

    //estado para hacer fetch a la lista de canciones cuando cambia
    const [hasChanged, setHasChange] = useState(true);

    //GET
    const fetchAlbums = async () => {
        setLoading(true);
        try {
            const {data} = await axios.get("https://sound-zone-api-sp5.onrender.com/api/albums");
            toast.success(`Data fetch successfully`);
            console.log(data)
            setAlbums(data);
            setHasChange(false);
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
    }

    const getAlbumById = async (id) => {
        try {
            setLoading(true);
            const { data } = await axios.get(`https://sound-zone-api-sp5.onrender.com/api/albums/${id}`);    
            toast.success(`Data fetch successfully`);
            return data;
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
        
    };

    //POST
    const createAlbum = async (album) => {
        try {
            setLoading(true);
            const {data} = await axios.post("https://sound-zone-api-sp5.onrender.com/api/albums/agregar", album);
            setHasChange(true);
            setAlbums((prev)=>[...prev, data]);    
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
        
    }


    //PUT
    const updateAlbum = async (id, updatedData) => {
        const enpoint = `https://sound-zone-api-sp5.onrender.com/api/albums/${id}/editar`;
        try {
            setLoading(true);
            const {data} = await axios.put(enpoint, updatedData);
            //console.log("ID:", id);
            //console.log("Respuesta del servidor:", data);
            setAlbums((prev)=>prev.map(album => String(album.id) === String(id) ? data : album));
            setHasChange(true);
            return data;    
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
        
    }

    //DELETE
    const deleteAlbum = async (id) => {
        try {
            await axios.delete(`https://sound-zone-api-sp5.onrender.com/api/albums/${id}`);
            setAlbums(prev => prev.filter(album => String(album.id) !== String(id)));
            setHasChange(true);
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        }
    }

    useEffect(()=>{
        if(hasChanged){
            fetchAlbums();
            console.log("actualizando");
        }
    }, [hasChanged]);

    return(
        <AlbumContext.Provider value={{albums, loading, createAlbum, updateAlbum, getAlbumById, deleteAlbum, setHasChange}}>
            { children }
        </AlbumContext.Provider>
    );
}

export const useAlbumContext = () => {
    return useContext(AlbumContext);
}