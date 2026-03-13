const PlaylistModal = () => {
  
  const savedPlaylist = localStorage.getItem('playlist');
  const playlistParsed = JSON.parse(savedPlaylist);

  return (
    <div id="playlistModal" className="fixed inset-0 bg-gray-400/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 border-4 border-amber-500 shadow-md relative w-full max-w-3xl max-h-[80vh] overflow-hidden">
        {/* Button close */}
        <button id="closeModal" className="absolute top-2 right-2 text-text-secondary hover:text-red-500 text-2xl">
          &times;
        </button>

        {/* Content modal */}
        <h2 className="text-lg font-bold text-center mb-4">Your playlist</h2>

        {/* Empty modal */}
        {/*<!-- <p className="text-text-secondary text-center">
            You don't have any movies in your Watchlist yet.
          </p> --> */}

        {/* Playlist Cards Section */}
        <div className="playlistCardSection bg-white py-10 overflow-y-auto max-h-[65vh] px-4">

          {/* Card Component */}
          {savedPlaylist && playlistParsed.length === 0 ? <p className="text-center">
            You don't have any songs in your playlist yet.
          </p> : 
          playlistParsed.map(song => <div key={song.id} className="flex items-center overflow-hidden p-4 space-x-4 border-b-2 border-amber-600 mt-0"> 
            {/* Image */}
            <img src={song.cover} alt={song.alt} className="w-20 h-20 object-cover rounded-md" />
            {/* Song Infor */}
            <div className="flex-1">
              <h3 className="text-text-primary text-lg font-bold">{song.title}</h3>
            </div>
            {/*Remove Button */}
            <button
              className="bg-state-error border-2 border-red-600 hover:bg-red-600 hover:text-white active:bg-red-700 
                      py-2 px-4 rounded-md font-semibold transition-colors duration-300">
              <i className="ph ph-trash"></i> Remove
            </button>
          </div>)
          
          }

          
        </div>
      </div>
    </div>
  )
}

export default PlaylistModal;