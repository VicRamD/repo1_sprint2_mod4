import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Main from './layout/Main';

import GenreBoard from './cards/GenreBoard';
import ArtistBoard from './cards/ArtistBoard';
import DashboardSelector from './pages/DashboardSelector';

const AppRouter = () => {
  return (
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/items" element={<Dashboard/>}>
              <Route path="genres" element={<GenreBoard/>} />
              <Route path="artists" element={<ArtistBoard/>} /> 
          </Route>
          <Route path="/favorite" element={<Main/>}/>
          <Route path="/*" element={<div>Ruta no encontrada - 404 NOT FOUND</div>}/>
    </Routes>
  )
}

export default AppRouter