import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";

//Crear el contexto
const GenreContext = createContext();

//Crear el proveedor del contexto
export const GenreProvider = ({ children }) => {
    const [genres, setGenres] = useState();
    const [loading, setLoading] = useState(false);

    //estado para hacer fetch a la lista de artistas cuando cambia
    const [hasChanged, setHasChange] = useState(true);

    //GET
    const fetchGenres = async () => {
        setLoading(true);
        try {
            const {data} = await axios.get("https://sound-zone-api-sp5.onrender.com/api/genres");
            console.log(data)
            setGenres(data);
            setHasChange(false);
        } catch (error) {
            console.error("Error al hacer fecth al endpoint de generos", error);
        } finally {
            setLoading(false);
        }
    }

    //POST
    const createGenre = async (genre) => {
        try {
            setLoading(true);
            //const {data} = await axios.post("https://sound-zone-api-sp5.onrender.com/api/genres/agregar", genre);
            const {data} = await axios.post("http://localhost:3000/api/genres/agregar", genre);
            setHasChange(true);
            setGenres((prev)=>[...prev, data]);    
        } catch (err) {
            toast.error(`Error Status ${err.response.status} - ${err.message}`);
        } finally {
            setLoading(false);
        }
        
    }

    useEffect(()=>{
        if(hasChanged){
            fetchGenres();
            console.log("actualizando");
        }
    }, [hasChanged]);

    return(
        <GenreContext.Provider value={{genres, loading, createGenre}}>
            { children }
        </GenreContext.Provider>
    );
}

export const useGenreContext = () => {
    return useContext(GenreContext);
}