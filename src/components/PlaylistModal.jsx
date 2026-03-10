const PlaylistModal = () => {
  return (
    <div id="playlistModal" className="fixed inset-0 bg-shadow-medium bg-opacity-75 flex justify-center items-center hidden z-50">
        <div className="bg-dark-primary rounded-lg p-6 relative w-full max-w-3xl max-h-[80vh] overflow-hidden">
            {/* Button close */}
            <button id="closeModal" className="absolute top-2 right-2 text-text-secondary hover:text-text-primary text-2xl">
                &times;
            </button>

            {/* Content modal */}
            <h2 className="text-text-primary text-lg font-bold text-center mb-4">
                Your Watchlist
            </h2>

            {/* Empty modal */}
          {/*<!-- <p className="text-text-secondary text-center">
            You don't have any movies in your Watchlist yet.
          </p> --> */}

            {/* Watchlist Cards Section */}
            <div className="bg-dark-secondary/900 py-10 overflow-y-auto max-h-[65vh] px-4 space-y-4">
                {/* Card Component */}
                <div className="flex items-center bg-dark-secondary rounded-lg shadow-md overflow-hidden p-4 space-x-4">
                {/* Image */}
                <img src="/assets/img/imagen_01.jpg" alt="The Shining" className="w-20 h-28 object-cover rounded-md" />
                {/* Song Infor */}
                <div className="flex-1">
                    <h3 className="text-text-primary text-lg font-bold">The Shining</h3>
                </div>
                {/*Remove Button */}
                <button
                    className="bg-state-error hover:bg-red-600 active:bg-red-700 text-text-primary py-2 px-4 rounded-md font-semibold transition-colors duration-300">
                    <i className="ph ph-trash"></i> Remove
                </button>
            </div>

            <div className="flex items-center bg-dark-secondary rounded-lg shadow-md overflow-hidden p-4 space-x-4">
              <img src="/assets/img/imagen_02.jpg" alt="Parasite" className="w-20 h-28 object-cover rounded-md" />
              <div className="flex-1">
                <h3 className="text-text-primary text-lg font-bold">Parasite</h3>
              </div>
              <button
                className="bg-state-error hover:bg-red-600 active:bg-red-700 text-text-primary py-2 px-4 rounded-md font-semibold transition-colors duration-300">
                <i className="ph ph-trash"></i> Remove
              </button>
            </div>

            <div className="flex items-center bg-dark-secondary rounded-lg shadow-md overflow-hidden p-4 space-x-4">
              <img src="/assets/img/imagen_07.jpg" alt="Old Boy" className="w-20 h-28 object-cover rounded-md" />
              <div className="flex-1">
                <h3 className="text-text-primary text-lg font-bold">Old Boy</h3>
              </div>
              <button
                className="bg-state-error hover:bg-red-600 active:bg-red-700 text-text-primary py-2 px-4 rounded-md font-semibold transition-colors duration-300">
                <i className="ph ph-trash"></i> Remove
              </button>
            </div>

            <div className="flex items-center bg-dark-secondary rounded-lg shadow-md overflow-hidden p-4 space-x-4">
              <img src="/assets/img/imagen_08.jpg" alt="2001: A Space Odyssey"
                className="w-20 h-28 object-cover rounded-md" />
              <div className="flex-1">
                <h3 className="text-text-primary text-lg font-bold">2001: A Space Odyssey</h3>
              </div>
              <button
                className="bg-state-error hover:bg-red-600 active:bg-red-700 text-text-primary py-2 px-4 rounded-md font-semibold transition-colors duration-300">
                <i className="ph ph-trash"></i> Remove
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PlaylistModal;