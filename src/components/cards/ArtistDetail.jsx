import { useNavigate, useParams, Link } from "react-router-dom"
import { useArtistContext } from "../../contexts/ArtistContext";

const ArtistDetail = () => {

    const { id } = useParams();
    const {artists} = useArtistContext();

    if(!artists) return <p>Cargando...</p>

    const artist = artists.find(a => a.id === id);
    
    if(!artist) return <p>Perfil no encontrado</p>

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
            <Link to="" className="bg-red-500 text-white px-4 py-2 inline-block">Eliminar</Link>
        </div>
    </div>
  )
}

export default ArtistDetail