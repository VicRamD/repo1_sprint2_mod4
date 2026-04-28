import logo from '../../assets/logoSoundZone.png'
import { useCartContext } from "../../contexts/CartContext";
import { useThemeContext } from "../../contexts/ThemeContext"
import { useOpener } from "../../hooks/useOpener";
import { usePlaylistContext } from '../../contexts/PlaylistContext';

const Header = () => {
  //cart
  const {toggle} = useCartContext();

  //theme
  const {changeTheme, themes} = useThemeContext();
  const {toggle: switcher, close, isOpen} = useOpener();

  //playlist
  const {open} = usePlaylistContext();

  function closeTabAndChangeTheme(themeName){
      changeTheme(themeName);
      close();
  }
  return (
    <header>
        <nav className='flex items-center justify-between w-full h-[5em] bg-amber-300 mx-auto z-30 py-5 px-6 lg:px-20 2xl:px-0'>
          <a href="/">
              <img src={logo} alt="logo libroteca" style={{width: '100px', height: '50px'}}/>
          </a>

          <div className='flex gap-1'>
              <div className="flex gap-4">
                {/**menu desplegable */}
                <div className="relative h-fit w-fit">
                    <button className="relative text-white cursor-pointer p-2 rounded-md hover:bg-white hover:text-black" onClick={switcher}>Theme</button>
                    <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300
                    transition-transform duration-300 ease-out"></span>

                    <div className={`absolute left-1/2 top-12 bg-white text-black -translate-x-1/2 ${isOpen ? '' : 'hidden'}`}>
                      <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
                      <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></div>
                      <div className="size-28 bg-white p-2 shadow-xl  overflow-y-scroll">
                        <ul className="w-full">
                          {Object.keys(themes).map((themeName)=>{
                            return  <li key={themeName} className="cursor-pointer mt-2 px-2 text-white bg-red-400 dark:bg-gray-900 
                            elegance:bg-elegance-400 rounded-md" onClick={() => closeTabAndChangeTheme(themeName)}>{themes[themeName]}</li>
                          })}
                        </ul>
                          
                      </div>
                    </div>
                </div>
                
                <button className='border-4 py-2 px-4 border-white text-white bg-amber-500 cursor-pointer rounded-full lg:rounded-3xl
                hover:text-amber-500 hover:bg-white dark:text-black dark:bg-white dark:border-gray-500
                dark:hover:text-white dark:hover:bg-gray-500 elegance:bg-elegance-500 elegance:hover:text-elegance-500' onClick={toggle}><i className="bi bi-cart4"></i>
                <span className='hidden lg:inline'>Carrito</span></button>

                
            </div>

            <div>
                <button className='border-4 py-2 px-3 border-white text-white bg-amber-500 cursor-pointer rounded-3xl
                hover:text-amber-500 hover:bg-white' onClick={() => open()}><span className='hidden lg:inline'>View</span> Playlist</button>
            </div>
          </div>
          
      </nav>
    </header>

  )
}

export default Header;