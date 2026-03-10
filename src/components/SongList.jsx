import { songsList } from "../constants/songsList"

const SongList = () => {
  return (
    <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Card Component */}
            {songsList.map(item => <div key={item.id} className="bg-dark-secondary rounded-lg shadow-lg overflow-hidden">
                <img src={item.cover} alt={item.alt} className="" />
                <div className="p-4">
                
                    <h2 className="text-text-primary text-lg text-center font-bold mb-2">
                        {item.title}
                    </h2>
                    <button
                        className="bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active text-dark-secondary py-2 px-4 rounded-md w-full font-semibold transition-colors duration-300">
                        <i className="bi bi-play text-red-500"></i> Add to playlist
                    </button>
                </div>
            </div>)}
            
        </div>
    </div>
  )
}

export default SongList