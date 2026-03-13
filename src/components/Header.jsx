import logo from '../assets/logoSoundZone.png'

const Header = ({ setIsModalOpen }) => {

  return (
    <nav className='flex items-center justify-between w-full h-[5em] bg-amber-300 mx-auto z-30 py-5 px-6 lg:px-20 2xl:px-0'>
        <a href="/">
            <img src={logo} alt="logo libroteca" style={{width: '100px', height: '50px'}}/>
        </a>
        <div>
            <button className='border-4 p-2 border-white text-white bg-amber-500 cursor-pointer 
            hover:text-amber-500 hover:bg-white' onClick={() => setIsModalOpen(true)}>View Playlist</button>
        </div>
    </nav>
  )
}

export default Header;