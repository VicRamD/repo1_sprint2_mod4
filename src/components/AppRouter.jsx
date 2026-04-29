import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Main from './layout/Main';

const AppRouter = () => {
  return (
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/items" element={<Dashboard/>}/>
          <Route path="/favorite" element={<Main/>}/>
          <Route path="/*" element={<div>Ruta no encontrada - 404 NOT FOUND</div>}/>
    </Routes>
  )
}

export default AppRouter