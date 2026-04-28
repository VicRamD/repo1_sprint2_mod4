import Header from './components/layout/Header'
import Main from './components/layout/Main';
import Footer from './components/layout/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorite" element={<Main/>}/>
          
        </Routes>
        
        <Footer/>
      </div>
      
    </>
  )
}

export default App
