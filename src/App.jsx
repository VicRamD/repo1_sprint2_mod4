import Header from './components/layout/Header'
import Main from './components/layout/Main';
import Footer from './components/layout/Footer'

import AppRouter from './components/AppRouter';
import { ContainerProvider } from './contexts/ContextContainer';

import { ToastContainer, toast } from 'react-toastify';

import { usePlaylistContext } from './contexts/PlaylistContext';
import PlaylistModal from './components/playlist/PlaylistModal';

function App() {
  const { isModalOpen } = usePlaylistContext();

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header/>
        {isModalOpen && <PlaylistModal/>}
        <ToastContainer/>
        <ContainerProvider>
          <AppRouter/>
        </ContainerProvider>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
