import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom"
import { useArtistContext } from "../../contexts/ArtistContext";

import Swal from 'sweetalert2'

const ArtistDetail = () => {

    const { id } = useParams();
    const { getArtistById, deleteArtist } = useArtistContext();
    const [artist, setArtist] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const load = async () => {
        const data = await getArtistById(id);
        setArtist(data);
        };
        load();
    }, [id]);

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteArtist(id);
                    await  Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    navigate("/items/artists");
                } catch (err) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: `Error Status ${err.response.status} - ${err.message}`
                    });
                }
                
            } 
            
        });
    }

    if (!artist) return <p>Cargando...</p>;

    return (
        <div className='max-w-75 border-2 border-black border-solid p-2'>
            <img src={`https://sound-zone-api-sp5.onrender.com/${artist.image}`} alt={`Imagen de ${artist.name}`} />
            <div>
                <h3><strong>Nombre:</strong>{artist.name}</h3>
                <p><strong>País de Nacimiento:</strong> {artist.country}</p>
                <p>Biografía: {artist.biography}</p>
                <p>Año de formación: {artist.formedYear}</p>
                <p>Está activo/a: <span>{artist.isActive ? "Si": "No"}</span></p>
            </div>
            <div className="flex flex-row justify-between">
                <Link to="edit" className="bg-emerald-700 text-white px-4 py-2 inline-block">Editar</Link>
                <button className="bg-red-500 text-white px-4 py-2 inline-block"
                onClick={handleDelete}>Eliminar A</button>
                {/*<Link to="" className="bg-red-500 text-white px-4 py-2 inline-block">Eliminar</Link>*/}
            </div>
        </div>
    )
}

export default ArtistDetail