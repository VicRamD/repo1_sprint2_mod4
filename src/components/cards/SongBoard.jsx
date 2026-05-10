import { Link, Outlet } from 'react-router-dom';

const SongBoard = () => {

  return (
    <div>
        <h2 className='text-2xl'>Genero</h2>
        <Link to="create" className='inline-block bg-emerald-500 border-2 border-solid border-black p-2 m-2
        hover:bg-emerald-400 hover:text-white'>Añadir una canción</Link>
        <Outlet/>
    </div>
  )
}

export default SongBoard