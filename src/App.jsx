import { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer'

function App() {

  //estado del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header setIsModalOpen={setIsModalOpen}/>
        <Main isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
