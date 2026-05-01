import React from 'react'
import { Link } from 'react-router-dom'

const ArtistCard = ({artist}) => {
  return (
    <div className='border-2 border-black border-solid p-2'>
        <img src={artist.imgUrl} alt={`Imagen de ${artist.imgUrl}`} />
        <div>
            <h3>Nombre: {artist.name}</h3>
            <p>País de Nacimiento: {artist.country}</p>
            <p>Está activo/a: <span>{artist.isActive ? "Si": "No"}</span></p>
        </div>
        <Link to="/">Ver más</Link>
    </div>
  )
}

export default ArtistCard