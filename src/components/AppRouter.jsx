import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Main from './layout/Main';

import GenreBoard from './cards/GenreBoard';
import ArtistBoard from './cards/ArtistBoard';
import DashboardSelector from './pages/DashboardSelector';
import CreateArtist from './pages/CreateArtist';
import ArtistsList from './pages/ArtistsList';
import ArtistDetail from './cards/ArtistDetail';
import ArtistEdit from './pages/ArtistEdit';
import NotFound from './pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/items" element={<Dashboard/>}>
              <Route path="genres" element={<GenreBoard/>} />
              {/*Sección de artistas */}
              <Route path="artists" element={<ArtistBoard/>}>
                  <Route index element={<ArtistsList/>}></Route>
                  <Route path='create' element={<CreateArtist/>}/>
                  <Route path=':id' element={<ArtistDetail/>}/>
                  <Route path=':id/edit' element={<ArtistEdit/>}/>
              </Route>
          </Route>
          <Route path="/favorite" element={<Main/>}/>
          <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRouter