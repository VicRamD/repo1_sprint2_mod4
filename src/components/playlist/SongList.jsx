import { songsList } from "../../constants/songsList";
import SongCard from "./SongCard";

const SongList = ({ onAdd }) => {

  return (
    <div className="bg-white py-10 flex justify-center">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6">
            {/* Card Component */}
            {songsList.map(song => <SongCard key={song.id} song={song} onAdd={onAdd}/>)}
        </div>
    </div>
  )
}

export default SongList