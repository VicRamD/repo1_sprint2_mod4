import { createContext, useContext} from "react";

import { ArtistProvider } from "./ArtistContext";
import { AlbumProvider } from "./AlbumContext";
import { SongProvider } from "./SongContext";
import { GenreProvider } from "./GenreContext";

//Crear el contexto
const ContainerContext = createContext();

//Crear el proveedor del contexto
export const ContainerProvider = ({ children }) => {

    return(
        <ContainerContext.Provider value={{}}>
            <ArtistProvider>
                <GenreProvider>
                    <SongProvider>
                        <AlbumProvider>
                            { children }
                        </AlbumProvider>
                    </SongProvider>
                </GenreProvider>
            </ArtistProvider>
        </ContainerContext.Provider>
    );
}

export const useContainerContext = () => {
    return useContext(ContainerContext);
}