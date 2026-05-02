//import { useState, useEffect } from 'react';

import PlaylistModal from '../playlist/PlaylistModal'
import SongList from '../playlist/SongList';

import Cart from '../cart/Cart';

//import { usePlaylistContext } from '../../contexts/PlaylistContext';

const Main = () => {

  //const { isModalOpen } = usePlaylistContext();

  return (
    <main className="pt-16">
        <h1 className='text-center font-bold text-4xl'>Escucha tus canciones favoritas</h1>
        {/*isModalOpen && <PlaylistModal/>*/}
        {/*isModalOpen && <PlaylistModal playlist={playlist} onClose={() => setIsModalOpen(false)} />*/}
        <SongList/>
        <Cart/>
    </main>
  )
}

export default Main