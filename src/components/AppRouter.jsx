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
import GenresList from './pages/GenresList';
import CreateGenre from './pages/CreateGenre';
import SongList from './pages/SongsList';
import SongBoard from './cards/SongBoard';
import AlbumBoard from './cards/AlbumBoard';
import AlbumList from './pages/AlbumList';

const AppRouter = () => {
  return (
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/items" element={<Dashboard/>}>
              {/*Sección de generos musicales*/}
              <Route path="genres" element={<GenreBoard/>}>
                  <Route index element={<GenresList/>}/>
                  <Route path="create" element={<CreateGenre/>}/>
              </Route>
              {/*Sección de artistas */}
              <Route path="artists" element={<ArtistBoard/>}>
                  <Route index element={<ArtistsList/>}></Route>
                  <Route path='create' element={<CreateArtist/>}/>
                  <Route path=':id' element={<ArtistDetail/>}/>
                  <Route path=':id/edit' element={<ArtistEdit/>}/>
              </Route>
              {/*Sección de canciones */}
              <Route path="songs" element={<SongBoard/>}>
                  <Route index element={<SongList/>}></Route>
                  {/*
                  <Route path='create' element={<CreateArtist/>}/>
                  <Route path=':id' element={<ArtistDetail/>}/>
                  <Route path=':id/edit' element={<ArtistEdit/>}/> */}
              </Route> 
              {/*Sección de albunes */}
              <Route path="albums" element={<AlbumBoard/>}>
                  <Route index element={<AlbumList/>}></Route>
                  {/*
                  <Route path='create' element={<CreateArtist/>}/>
                  <Route path=':id' element={<ArtistDetail/>}/>
                  <Route path=':id/edit' element={<ArtistEdit/>}/> */}
              </Route>
          </Route>
          <Route path="/favorite" element={<Main/>}/>
          <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRouter