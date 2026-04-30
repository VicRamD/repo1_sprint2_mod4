import { Link, Outlet } from "react-router-dom";

const DashboardSelector = () => {
  return (
    <div>
        <div className="flex">
            <Link to="genres">Generos</Link>
            <Link to="artists">Artistas</Link>
        </div> 
        <Outlet/>
    </div>
  )
}

export default DashboardSelector;