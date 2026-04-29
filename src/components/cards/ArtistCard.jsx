import React from 'react'
import { Link } from 'react-router-dom'

const ArtistCard = ({artist}) => {
  return (
    <div className='w-xl border-2 border-black border-solid'>
        <img src={artist.imgUrl} alt={`Imagen de ${artist.imgUrl}`} />
        <div>
            <h3>Nombre: {artist.name}</h3>
            <p>País de Nacimiento: {artist.country}</p>
            <p>Está activo/a: <span>{artist.isActive}</span></p>
        </div>
        <Link to="/">Ver más</Link>
    </div>
  )
}

export default ArtistCard