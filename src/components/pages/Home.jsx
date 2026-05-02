import { Link } from 'react-router-dom'
import logo from '../../assets/sz-logo-home.png'

const Home = () => {
  return (
    <main className="pt-16">
        <div className='flex w-full justify-center'>
            <img src={logo} alt="Logo de Sound Zone" className='size-64'/>
        </div>
        <h1 className='text-center font-bold text-4xl'>Escucha tus canciones favoritas</h1>
        <div className='flex justify-center'>
            <Link to="/items" className='bg-amber-400 text-white px-8 py-3 rounded-lg
            hover:bg-white hover:border-2 hover:border-amber-400 hover:text-amber-500 hover:font-bold border-solid'>Ingresar</Link>
        </div>
    </main>
  )
}

export default Home