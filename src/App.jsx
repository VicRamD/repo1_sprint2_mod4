import Header from './components/layout/Header'
import Main from './components/layout/Main';
import Footer from './components/layout/Footer'

import AppRouter from './components/AppRouter';
import { ArtistProvider } from './contexts/ArtistContext';

function App() {

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header/>
        <ArtistProvider>
          <AppRouter/>
        </ArtistProvider>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
