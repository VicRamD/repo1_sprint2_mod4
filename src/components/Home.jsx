import logo from '../assets/sz-logo-home.png'

const Home = () => {
  return (
    <main className="pt-16">
        <div className='flex w-full'>
            <img src={logo} alt="Logo de Sound Zone" />
        </div>
        <h1 className='text-center font-bold text-4xl'>Escucha tus canciones favoritas</h1>
    </main>
  )
}

export default Home