const SongCard = ({song, onAdd}) => {

    return (
        <div className="bg-dark-secondary rounded-lg shadow-lg overflow-hidden max-w-80">
            <div className="relative-container relative">
                <img src={song.cover} alt={song.alt} className="" />
                <h2 className="card-title text-white text-xl bg-amber-300/50 w-full text-center font-bold mb-2 
                    text-shadow-md text-shadow-orange-600 absolute bottom-0">
                    {song.title}
                </h2>
            </div>

            <div className="p-4">
                <button className="bg-button-primary hover:bg-amber-400 active:bg-red-600 text-dark-secondary py-2 px-4 
                rounded-md w-full font-semibold transition-colors duration-300" onClick={() => onAdd(song)}>
                    <i className="bi bi-play text-red-500"></i> Add to playlist
                </button>
            </div>
        </div>
    )
}

export default SongCard;