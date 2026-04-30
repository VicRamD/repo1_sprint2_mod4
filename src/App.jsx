import Header from './components/layout/Header'
import Main from './components/layout/Main';
import Footer from './components/layout/Footer'

import AppRouter from './components/AppRouter';
import { ArtistProvider } from './contexts/ArtistContext';
import { GenreProvider } from './contexts/GenreContext';

function App() {

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header/>
        <ArtistProvider>
          <GenreProvider>
              <AppRouter/>
          </GenreProvider>
        </ArtistProvider>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
