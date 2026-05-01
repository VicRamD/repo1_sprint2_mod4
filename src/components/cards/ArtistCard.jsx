import { Link } from 'react-router-dom'

const ArtistCard = ({artist}) => {
  console.log(artist);

  return (
    <div className='max-w-75 border-2 border-black border-solid p-2'>
        <img src={`https://sound-zone-api-sp5.onrender.com/${artist.image}`} alt={`Imagen de ${artist.name}`} />
        <div>
            <h3>Nombre: {artist.name}</h3>
            <p>País de Nacimiento: {artist.country}</p>
            <p>Está activo/a: <span>{artist.isActive ? "Si": "No"}</span></p>
        </div>
        <Link to={artist.id} className='bg-blue-300 px-4 py-2 border inline-block'>Ver más</Link>
    </div>
  )
}

export default ArtistCard