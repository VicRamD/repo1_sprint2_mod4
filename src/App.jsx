import { useState } from 'react';
import Header from './components/layout/Header'
import Main from './components/layout/Main';
import Footer from './components/layout/Footer'

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
