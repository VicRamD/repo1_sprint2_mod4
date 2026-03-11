import { songsList } from "../constants/songsList";
import SongCard from "./SongCard";

const SongList = () => {
  return (
    <div className="bg-white py-10 flex justify-center">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6">
            {/* Card Component */}
            {songsList.map(item => <SongCard key={item.id} cover={item.cover} alt={item.alt} title={item.title}/>)}
        </div>
    </div>
  )
}

export default SongList