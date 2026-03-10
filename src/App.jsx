import Header from './components/Header'
import Footer from './components/Footer'
import PlaylistModal from './components/PlaylistModal'
import SongList from './components/SongList';

function App() {

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header/>
        <PlaylistModal/>
        <SongList/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
