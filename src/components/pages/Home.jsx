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
            <Link to="/favorite" className='bg-amber-400 px-4 py-2'>Ingresar</Link>
        </div>
    </main>
  )
}

export default Home