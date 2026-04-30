import { Link, Outlet } from "react-router-dom";

const DashboardSelector = () => {
  return (
    <div>
        <div className="flex flex-row">
            <Link to="genres" className="border-2 border-solid border-black rounded-lg px-4 py-2 m-4 hover:bg-amber-600 hover:text-white">Generos</Link>
            <Link to="artists" className="border-2 border-solid border-black rounded-lg px-4 py-2 m-4 hover:bg-amber-600 hover:text-white">Artistas</Link>
        </div> 
        <Outlet/>
    </div>
  )
}

export default DashboardSelector;