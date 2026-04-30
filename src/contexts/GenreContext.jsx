import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//Crear el contexto
const GenreContext = createContext();

//Crear el proveedor del contexto
export const GenreProvider = ({ children }) => {
    const [genres, setGenres] = useState();
    const [loading, setLoading] = useState(false);

    const fetchGenres = async () => {
        setLoading(true);
        try {
            const {data} = await axios.get("https://sound-zone-api-sp5.onrender.com/api/genres");
            console.log(data)
            setGenres(data);
        } catch (error) {
            console.error("Error al hacer fecth al endpoint de generos", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchGenres();
    }, []);

    return(
        <GenreContext.Provider value={{genres, loading}}>
            { children }
        </GenreContext.Provider>
    );
}

export const useGenreContext = () => {
    return useContext(GenreContext);
}