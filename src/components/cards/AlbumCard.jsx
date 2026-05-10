import { Link } from 'react-router-dom'

const AlbumCard = ({album}) => {
  //console.log(song);

  
  return (
    <div className='max-w-75 border-2 border-black border-solid p-2 my-4'>
        <img src={`https://sound-zone-api-sp5.onrender.com/${album.coverUrl}`} alt={`Imagen de ${album.title}`}/>
        
        <div>
            <h3><strong>Nombre:</strong> {album.title}</h3>
            <p>Artistas:</p>
            <ul>
                {album.artists?.map(artist => <li>{artist.name}</li>)}
            </ul>
        </div>
        <p>Idioma: {album.language}</p>
        <Link to={album.id} className='bg-blue-300 px-4 py-2 border inline-block hover:bg-blue-950 hover:text-white'>Ver más</Link>
    </div>
  )
}

export default AlbumCard