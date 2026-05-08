import { Link } from 'react-router-dom'

const ArtistCard = ({artist}) => {
  console.log(artist);

  
  return (
    <div className='max-w-75 border-2 border-black border-solid p-2 my-4'>
        <img src={`https://sound-zone-api-sp5.onrender.com/${artist.image}`} alt={`Imagen de ${artist.name}`}/>
        {/*<img src={`https://sound-zone-api-sp5.onrender.com/${artist.image}`} alt={`Imagen de ${artist.name}`} />*/}
        
        <div>
            <h3><strong>Nombre:</strong> {artist.name}</h3>
            <p><strong>País de Nacimiento:</strong> {artist.country}</p>
            <p className='my-2'><strong>Está activo/a:</strong> <span className='bg-blue-400 border-2 border-solid border-blue-950 p-2 rounded-md text-white'>{artist.isActive ? "Si": "No"}</span></p>
        </div>
        <Link to={artist.id} className='bg-blue-300 px-4 py-2 border inline-block hover:bg-blue-950 hover:text-white'>Ver más</Link>
    </div>
  )
}

export default ArtistCard